"use server";

export type ContactState = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const CONTACT_EMAIL_TO = process.env.CONTACT_EMAIL_TO;
  const CONTACT_EMAIL_FROM = process.env.CONTACT_EMAIL_FROM;
  const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

  if (
    !BREVO_API_KEY ||
    !CONTACT_EMAIL_TO ||
    !CONTACT_EMAIL_FROM ||
    !RECAPTCHA_SECRET_KEY
  ) {
    return { success: false, message: "System configuration error." };
  }

  // Extract Data
  const rawData = {
    companyName: formData.get("companyName") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    comment: formData.get("comment") as string,
    recaptchaToken: formData.get("recaptchaToken") as string,
  };

  // Manual Server Validation
  if (!rawData.companyName || !rawData.email || !rawData.recaptchaToken) {
    return { success: false, message: "Missing required fields." };
  }

  try {
    const recaptchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${RECAPTCHA_SECRET_KEY}&response=${rawData.recaptchaToken}`,
      },
    );

    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success) {
      console.error("Captcha Verification Failed:", recaptchaData);
      return {
        success: false,
        message: "Security check failed. Please try again.",
      };
    }
  } catch (error) {
    return { success: false, message: "Failed to verify security check." };
  }

  // Send Email via Brevo
  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "HireTrack Website", email: CONTACT_EMAIL_FROM },
        to: [{ email: CONTACT_EMAIL_TO, name: "HireTrack Admin" }],
        replyTo: { email: rawData.email, name: rawData.companyName },
        subject: `New Access Request: ${rawData.companyName}`,
        htmlContent: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>New Access Request</h2>
            <p><strong>Company:</strong> ${rawData.companyName}</p>
            <p><strong>Email:</strong> ${rawData.email}</p>
            <p><strong>Phone:</strong> ${rawData.phone || "N/A"}</p>
            <p><strong>Message:</strong><br/>${rawData.comment || "N/A"}</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      return {
        success: false,
        message: "Failed to send request. Please try again.",
      };
    }

    return {
      success: true,
      message:
        "We have received your request. Our team will contact you shortly.",
    };
  } catch (error) {
    return { success: false, message: "An unexpected error occurred." };
  }
}
