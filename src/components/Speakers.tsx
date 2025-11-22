import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ahmedHassan from "@/assets/ahmed-hassan.jpg";
import lionelBriand from "@/assets/lionel-briand.png";
import katsuroInoue from "@/assets/katsuro-inoue.jpg";
import houariSahraoui from "@/assets/houari-sahraoui.jpg";
import yannGaelGueheneuc from "@/assets/yann-gael-gueheneuc.jpg";
import simonPeytonJones from "@/assets/simon-peyton-jones.png";
import walidMaalej from "@/assets/walid-maalej.png";
import michelChaudron from "@/assets/michel-chaudron.png";
import hafedhMili from "@/assets/hafedh-mili.jpg";
import bruceMaxim from "@/assets/bruce-maxim.jpg";
import raulaKula from "@/assets/raula-kula.png";
import fatimaTambajang from "@/assets/fatima-tambajang.jpg";
import fatemehFard from "@/assets/fatemeh-fard.jpg";
import manelAbdellatif from "@/assets/manel-abdellatif.png";
import moatazChouchen from "@/assets/moataz-chouchen.jpg";
import mohamedSaied from "@/assets/mohamed-saied.png";
import sarahNadi from "@/assets/sarah-nadi.jpg";
import alvineBelle from "@/assets/alvine-belle.jpg";
import zadiaCodabux from "@/assets/zadia-codabux.png";
import prasunLala from "@/assets/prasun-lala.jpg";
import abdelmajidKhelil from "@/assets/abdelmajid-khelil.png";

const Speakers = () => {
  const plenarySpeakers = [
    // Row 1 (positions 1-4)
    {
      name: "Pr. Ahmed E. Hassan",
      title: "Queen's University, Canada",
      image: ahmedHassan,
      website: "https://research.cs.queensu.ca/home/ahmed/",
    },
    {
      name: "Pr. Lionel Briand",
      title: "University of Ottawa, Canada, Lero, Ireland",
      image: lionelBriand,
      website: "https://www.lero.ie/people/lionel-briand",
    },
    {
      name: "Pr. Katsuro Inoue",
      title: "Ritsumeikan University, Japan",
      image: katsuroInoue,
      website: "https://www.nanzan-u.ac.jp/English/",
    },
    {
      name: "Pr. Houari Sahraoui",
      title: "Université de Montréal, Canada",
      image: houariSahraoui,
      website: "https://diro.umontreal.ca/repertoire-departement/professeurs/professeur/in/in14695/sg/Houari%20Sahraoui/",
    },
    // Row 2 (positions 5-8) - Sarah is here
    {
      name: "Pr. Yann-Gaël Guéhéneuc",
      title: "Concordia University, Canada",
      image: yannGaelGueheneuc,
      website: "https://www.concordia.ca/faculty/yann-gael-gueheneuc.html",
    },
    {
      name: "Pr. Walid Maalej",
      title: "University of Hamburg, Germany",
      image: walidMaalej,
      website: "https://maalejw.github.io/",
    },
    {
      name: "Dr. Sarah Nadi",
      title: "New York University Abu Dhabi, UAE",
      image: sarahNadi,
      website: "https://snadi.github.io/",
    },
    {
      name: "Pr. Simon Peyton Jones",
      title: "Microsoft Research Cambridge, UK",
      image: simonPeytonJones,
      website: "https://www.microsoft.com/en-us/research/people/simonpj/",
    },
    // Row 3 (positions 9-12)
    {
      name: "Pr. Michel Chaudron",
      title: "Eindhoven University of Technology, Netherlands",
      image: michelChaudron,
      website: "https://research.tue.nl/en/persons/michel-chaudron",
    },
    {
      name: "Dr. Zadia Codabux",
      title: "University of Saskatchewan, Canada",
      image: zadiaCodabux,
      website: "https://www.cs.usask.ca/faculty/zadiacodabux/",
    },
    {
      name: "Dr. Fatemeh Fard",
      title: "University of British Columbia, Canada",
      image: fatemehFard,
      website: "https://fard.people.ubc.ca/",
    },
    // Row 4 (positions 13-17)
    {
      name: "Pr. Hafedh Mili",
      title: "Université du Québec à Montréal, Canada",
      image: hafedhMili,
      website: "https://professeurs.uqam.ca/professeur/mili.hafedh/",
    },
    {
      name: "Pr. Raula Gaikovina Kula",
      title: "Osaka University, Japan",
      image: raulaKula,
      website: "https://raux.github.io/",
    },
    {
      name: "Pr. Bruce R. Maxim",
      title: "University of Michigan-Dearborn, USA",
      image: bruceMaxim,
      website: "https://umdearborn.edu/users/bmaxim",
    },
    {
      name: "Ms. Fatima Tambajang",
      title: "NVIDIA, USA",
      image: fatimaTambajang,
      website: "https://blogs.nvidia.com/blog/author/ftambajang/",
    },
    {
      name: "Dr. Manel Abdellatif",
      title: "ÉTS Montreal, Canada",
      image: manelAbdellatif,
      website: "https://www.etsmtl.ca/",
    },
    {
      name: "Dr. Moataz Chouchen",
      title: "Concordia University, Canada",
      image: moatazChouchen,
      website: "https://www.concordia.ca/faculty/moataz-chouchen.html",
    },
    // Row 5 (positions 18-19)
    {
      name: "Dr. Mohamed Aymen Saied",
      title: "Université Laval, Canada",
      image: mohamedSaied,
      website: "https://www.ulaval.ca/",
    },
    {
      name: "Dr. Alvine Boaye Belle",
      title: "York University, Canada",
      image: alvineBelle,
      website: "https://lassonde.yorku.ca/users/alvinebelle",
    },
    {
      name: "Mr. Prasun Lala",
      title: "ÉTS Montréal, Université du Québec, Canada",
      image: prasunLala,
      website: "https://www.etsmtl.ca/en/auteur/prasun-lala",
    },
    {
      name: "Pr. Abdelmajid Khelil",
      title: "Landshut University of Applied Sciences, Germany",
      image: abdelmajidKhelil,
      website: "https://www.haw-landshut.de/",
    },
  ];

  const hasDetailPage = (speakerName: string) => {
    return speakerName === "Dr. Moataz Chouchen" || 
           speakerName === "Pr. Bruce R. Maxim" ||
           speakerName === "Pr. Michel Chaudron" ||
           speakerName === "Pr. Lionel Briand" ||
           speakerName === "Pr. Walid Maalej" ||
           speakerName === "Pr. Simon Peyton Jones" ||
           speakerName === "Pr. Ahmed E. Hassan" ||
           speakerName === "Dr. Fatemeh Fard" ||
           speakerName === "Pr. Raula Gaikovina Kula" ||
           speakerName === "Pr. Katsuro Inoue" ||
           speakerName === "Dr. Sarah Nadi" ||
           speakerName === "Pr. Houari Sahraoui" ||
           speakerName === "Dr. Alvine Boaye Belle" ||
           speakerName === "Dr. Zadia Codabux" ||
           speakerName === "Dr. Mohamed Aymen Saied" ||
           speakerName === "Ms. Fatima Tambajang" ||
           speakerName === "Dr. Manel Abdellatif" ||
           speakerName === "Pr. Hafedh Mili" ||
           speakerName === "Mr. Prasun Lala" ||
           speakerName === "Pr. Yann-Gaël Guéhéneuc" ||
           speakerName === "Pr. Abdelmajid Khelil";
  };

  const getDetailPageLink = (speakerName: string) => {
    if (speakerName === "Dr. Moataz Chouchen") {
      return "/speakers/moataz-chouchen";
    }
    if (speakerName === "Pr. Bruce R. Maxim") {
      return "/speakers/bruce-maxim";
    }
    if (speakerName === "Pr. Michel Chaudron") {
      return "/speakers/michel-chaudron";
    }
    if (speakerName === "Pr. Lionel Briand") {
      return "/speakers/lionel-briand";
    }
    if (speakerName === "Pr. Walid Maalej") {
      return "/speakers/walid-maalej";
    }
    if (speakerName === "Pr. Simon Peyton Jones") {
      return "/speakers/simon-peyton-jones";
    }
    if (speakerName === "Pr. Ahmed E. Hassan") {
      return "/speakers/ahmed-hassan";
    }
    if (speakerName === "Dr. Fatemeh Fard") {
      return "/speakers/fatemeh-fard";
    }
    if (speakerName === "Pr. Raula Gaikovina Kula") {
      return "/speakers/raula-kula";
    }
    if (speakerName === "Pr. Katsuro Inoue") {
      return "/speakers/katsuro-inoue";
    }
    if (speakerName === "Dr. Sarah Nadi") {
      return "/speakers/sarah-nadi";
    }
    if (speakerName === "Pr. Houari Sahraoui") {
      return "/speakers/houari-sahraoui";
    }
    if (speakerName === "Dr. Alvine Boaye Belle") {
      return "/speakers/alvine-belle";
    }
    if (speakerName === "Dr. Zadia Codabux") {
      return "/speakers/zadia-codabux";
    }
    if (speakerName === "Dr. Mohamed Aymen Saied") {
      return "/speakers/mohamed-saied";
    }
    if (speakerName === "Ms. Fatima Tambajang") {
      return "/speakers/fatima-tambajang";
    }
    if (speakerName === "Dr. Manel Abdellatif") {
      return "/speakers/manel-abdellatif";
    }
    if (speakerName === "Pr. Hafedh Mili") {
      return "/speakers/hafedh-mili";
    }
    if (speakerName === "Mr. Prasun Lala") {
      return "/speakers/prasun-lala";
    }
    if (speakerName === "Pr. Yann-Gaël Guéhéneuc") {
      return "/speakers/yann-gael-gueheneuc";
    }
    if (speakerName === "Pr. Abdelmajid Khelil") {
      return "/speakers/abdelmajid-khelil";
    }
    return null;
  };


  return (
    <section id="speakers" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Meet Our Plenary Speakers</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {/* Plenary Speakers */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {plenarySpeakers.map((speaker, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4 space-y-3">
                  <h3 className="text-lg font-bold">{speaker.name}</h3>
                  <p className="text-xs text-muted-foreground min-h-[40px]">
                    {speaker.title}
                  </p>
                  <div className="flex flex-col gap-2">
                    {hasDetailPage(speaker.name) && (
                      <Button
                        variant="default"
                        size="sm"
                        className="w-full"
                        asChild
                      >
                        <Link to={getDetailPageLink(speaker.name)!}>
                          View Talk Details
                        </Link>
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      asChild
                    >
                      <a
                        href={speaker.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        Website
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
