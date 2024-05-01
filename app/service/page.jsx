import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Service() {
  return (
    <>
      <div className="container pt-32">
        <main>
          <div id="first-heading">
            Find the right type of treatment for you.
          </div>
          <div id="second-heading">
            We specialize in foot care and Thai massage techniques. <br />
            Here you will find the right treatment for you. <br />
          </div>
          <div className="massage-heading">Massage</div>
          <div className="allservice">
            <div className="description">
              <Image
                className="service-img"
                src="/massage-oil.png"
                alt="Massage Oil"
                width={280}
                height={80}
              />
              <div className="text-info">
                We offer a relaxing full body oil massage where you will
                experience absolute tranquility in your body. This treatment is
                recommended if you are experiencing stress or have an area of
                your body that is tense. The oil massage is a gentler form of
                massage. The oil helps to alleviate dry and blemished skin and
                promotes vitality and radiance in your skin. Our technique
                originates from traditional Thai massage, so you will experience
                your muscles completely relaxing after your treatment. Our oil
                massage is perfect for couples who want to pamper each other.
              </div>
              <div className="price-info">
                Oil massage (60 min) 40 dollars.
                <Link className="btn book" href="https://calendly.com">
                  Book now
                </Link>
              </div>
              <div className="price-info">
                Oliemassage (90 min) 55 dollars.
                <Link className="btn book " href="https://calendly.com">
                  Book nu
                </Link>
              </div>
              <div className="price-info">
                Couples Couples oil massage (60 min) 75 dollars.
                <Link className="btn book" href="tel:+498009">
                  Call us
                </Link>
              </div>
              <div className="price-info">
                Couples Couples oil massage (90 min) 1.07 dollars.
                <Link className="btn book" href="tel:+492624661[094">
                  Call us
                </Link>
              </div>
            </div>
          </div>
          <hr />
          <div className="fodpleje-heading">Fodpleje</div>

          <div className="allservice">
            <div className="description">
              <Image
                className="service-img"
                src="/treatment-foot.png"
                alt="Foot Treatment"
                width={280}
                height={80}
              />
              <div className="text-info">
                Our Foot Treatment is for those who want the best for their
                feet. During the treatment, you will receive a foot bath,
                removal of hard skin, and any calluses. Your feet will feel
                brand new and will thank you after our treatment. We finish with
                a foot massage, using Thai techniques to follow the median
                lines, which will stimulate blood circulation and the nervous
                system.
              </div>
              <div className="price-info">
                Foot treatment 35 dallors.
                <Link className="btn book" href="https://calendly.com/">
                  Book now
                </Link>
              </div>
              <Image
                className="service-img"
                src="/massage-foot.png"
                alt="Foot Massage"
                width={280}
                height={80}
              />
              <div className="text-info">
                In foot massage, we use Thai techniques by following the median
                lines, stimulating blood circulation and the nervous system.
                Applying pressure therapy to the foot will provide a sense of
                balance throughout the body. The nervous system in the foot
                extends throughout the entire body, so foot massage helps heal
                or prevent illness. The massage begins by massaging the
                undersides and tops of the feet, then moving on to massage the
                lower legs.
              </div>
              <div className="price-info">
                Foot treatment (30 min) 18 dollars.
                <Link className="btn book" href="https://calendly.com/">
                  Book now
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
