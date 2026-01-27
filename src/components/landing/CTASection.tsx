import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl text-primary-foreground md:text-4xl font-bold mb-4">
            Ready to Transform Your Hiring Process?
          </h2>
          <p className="text-lg opacity-80 mb-8 max-w-xl mx-auto">
            Join organizations that have streamlined their recruitment with HireTrack. 
            Start making data-driven hiring decisions today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="xl" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <a href="/#downloads">
                View Documentation
              </a>
            </Button>
            <Button 
              size="xl" 
              className="bg-accent text-white hover:bg-accent/90"
              asChild
            >
              <a href="/hiretrack-installer">
                Download Installer
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
