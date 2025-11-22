import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import abdelmajidKhelil from "@/assets/abdelmajid-khelil.png";

const AbdelmajidKhelil = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('speakers')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Back Button */}
            <Button variant="ghost" className="gap-2" onClick={handleBackClick}>
              <ArrowLeft className="h-4 w-4" />
              Back to Speakers
            </Button>

            {/* Speaker Header */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-[300px,1fr] gap-6">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={abdelmajidKhelil}
                    alt="Professor Abdelmajid Khelil"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col justify-center space-y-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                      Pr. Abdelmajid Khelil
                    </h1>
                    <p className="text-lg text-muted-foreground">
                      Landshut University of Applied Sciences, Germany
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Talk Details */}
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-3">Talk Title</h2>
                  <p className="text-lg">
                    On Scoring the Security of Cyber-Physical Systems
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Abstract</h2>
                  <div className="text-muted-foreground space-y-4 leading-relaxed">
                    <p>
                      This talk will explore methodologies and frameworks for assessing and scoring the security of cyber-physical systems (CPS). As critical infrastructure increasingly relies on the integration of computational and physical processes, understanding and quantifying security risks becomes essential. The discussion will cover key challenges in CPS security evaluation, metrics for scoring vulnerabilities, and best practices for improving resilience against cyber threats.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Biography</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Abdelmajid Khelil is a professor of the Internet of Things (IoT) at the Landshut University of Applied Sciences. His research interests include the Internet of Vehicles, Time-Sensitive Fog Computing, Cyber Physical Systems, Artificial Intelligence for IoT, and Industry 4.0. Khelil received a PhD in computer science from the University of Stuttgart. From 2012 to 2014, he was the IoT research area lead at Huawei European Research center. From 2014 to 2016, he was a project manager at Bosch Software Innovations in the field of IoT and smart cities. He's a member of IEEE.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AbdelmajidKhelil;
