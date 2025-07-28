import React from 'react';
import styled from 'styled-components';
import { MapPin, Clock, Phone, Car } from 'lucide-react';

const LocationPageContainer = styled.div`
  padding: 80px 20px 40px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #000;
  color: #fff;
`;

const PageHeader = styled.header`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  color: #DC2626;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #999;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`;

const InfoCard = styled.div`
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border-radius: 12px;
  padding: 30px;
  border: 2px solid #DC2626;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(220, 38, 38, 0.3);
  }
`;

const InfoTitle = styled.h2`
  font-size: 1.5rem;
  color: #DC2626;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InfoContent = styled.div`
  color: #ccc;
  line-height: 1.8;
`;

const MapSection = styled.section`
  background: #1a1a1a;
  border-radius: 12px;
  padding: 40px;
  margin: 40px 0;
`;

const MapTitle = styled.h2`
  font-size: 2rem;
  color: #FFD700;
  margin-bottom: 20px;
`;

const NearbySection = styled.section`
  margin: 60px 0;
`;

const NearbyTitle = styled.h2`
  font-size: 2.5rem;
  color: #DC2626;
  text-align: center;
  margin-bottom: 40px;
`;

const NearbyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
`;

const NearbyPlace = styled.div`
  background: #2d2d2d;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #FFD700;
  
  h3 {
    color: #FFD700;
    margin-bottom: 10px;
    font-size: 1.25rem;
  }
  
  p {
    color: #999;
    font-size: 0.95rem;
  }
`;

const SEOSection = styled.section`
  background: #1a1a1a;
  padding: 40px;
  border-radius: 12px;
  margin: 60px 0;
`;

const SEOTitle = styled.h3`
  font-size: 2rem;
  color: #DC2626;
  margin-bottom: 20px;
`;

const SEOContent = styled.div`
  color: #ccc;
  line-height: 1.8;
  
  p {
    margin-bottom: 15px;
  }
`;

const CTASection = styled.section`
  background: linear-gradient(135deg, #DC2626, #991B1B);
  border-radius: 12px;
  padding: 50px;
  text-align: center;
  margin: 40px 0;
  
  h2 {
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.25rem;
    color: #fff;
    margin-bottom: 30px;
  }
  
  a {
    display: inline-block;
    background: #000;
    color: #FFD700;
    padding: 15px 40px;
    border-radius: 8px;
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: bold;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    }
  }
`;

const MidtownDetroitPage: React.FC = () => {
  return (
    <LocationPageContainer>
      <PageHeader>
        <Title>Royale with Cheese - Midtown Detroit</Title>
        <Subtitle>
          Your favorite Pulp Fiction-inspired burger joint in the heart of Midtown Detroit. 
          Serving the best burgers, shakes, and vibes at 4163 Cass Ave!
        </Subtitle>
      </PageHeader>

      <InfoGrid>
        <InfoCard>
          <InfoTitle>
            <MapPin size={24} />
            Location & Directions
          </InfoTitle>
          <InfoContent>
            <p><strong>4163 Cass Ave</strong></p>
            <p>Detroit, MI 48201</p>
            <p style={{ marginTop: '15px' }}>
              Located in the vibrant Midtown district, we're easily accessible from I-94 and I-75. 
              Just minutes from Wayne State University and the Detroit Institute of Arts.
            </p>
          </InfoContent>
        </InfoCard>

        <InfoCard>
          <InfoTitle>
            <Clock size={24} />
            Hours of Operation
          </InfoTitle>
          <InfoContent>
            <p><strong>Monday - Thursday:</strong> 11:00 AM - 10:00 PM</p>
            <p><strong>Friday - Saturday:</strong> 11:00 AM - 11:00 PM</p>
            <p><strong>Sunday:</strong> 12:00 PM - 9:00 PM</p>
            <p style={{ marginTop: '15px', color: '#FFD700' }}>
              Kitchen closes 30 minutes before closing time
            </p>
          </InfoContent>
        </InfoCard>

        <InfoCard>
          <InfoTitle>
            <Car size={24} />
            Parking & Transit
          </InfoTitle>
          <InfoContent>
            <p><strong>Parking:</strong> Street parking available on Cass Ave and surrounding streets</p>
            <p><strong>Public Transit:</strong> DDOT Bus routes 16 and 53</p>
            <p><strong>Bike Parking:</strong> Bike racks available in front</p>
            <p style={{ marginTop: '15px' }}>
              We validate parking for the structure on Willis St (2-hour validation with purchase)
            </p>
          </InfoContent>
        </InfoCard>
      </InfoGrid>

      <NearbySection>
        <NearbyTitle>Nearby Midtown Attractions</NearbyTitle>
        <NearbyGrid>
          <NearbyPlace>
            <h3>Wayne State University</h3>
            <p>0.3 miles - Perfect for students and faculty looking for a great meal between classes</p>
          </NearbyPlace>
          <NearbyPlace>
            <h3>Detroit Institute of Arts</h3>
            <p>0.5 miles - Grab a burger before or after exploring world-class art</p>
          </NearbyPlace>
          <NearbyPlace>
            <h3>Detroit Historical Museum</h3>
            <p>0.4 miles - Learn about Detroit's history, then taste its best burgers</p>
          </NearbyPlace>
          <NearbyPlace>
            <h3>Majestic Theatre</h3>
            <p>0.6 miles - Pre-show dinner spot for concert-goers</p>
          </NearbyPlace>
          <NearbyPlace>
            <h3>DMC Detroit Medical Center</h3>
            <p>0.7 miles - Quick delivery available for medical staff</p>
          </NearbyPlace>
          <NearbyPlace>
            <h3>Little Caesars Arena</h3>
            <p>1.2 miles - Perfect pre-game meal for Red Wings and Pistons fans</p>
          </NearbyPlace>
        </NearbyGrid>
      </NearbySection>

      <CTASection>
        <h2>Ready for the Best Burger in Midtown?</h2>
        <p>Call now to place your order or stop by today!</p>
        <a href="tel:313-525-2424">📞 313-525-2424</a>
      </CTASection>

      <SEOSection>
        <SEOTitle>About Royale with Cheese in Midtown Detroit</SEOTitle>
        <SEOContent>
          <p>
            Royale with Cheese has become a Midtown Detroit institution since opening our doors on Cass Avenue. 
            Our Pulp Fiction-themed restaurant brings a unique dining experience to the cultural heart of Detroit, 
            serving hand-crafted burgers, fresh-cut fries, and legendary milkshakes to locals, students, and visitors alike.
          </p>
          <p>
            Situated in the bustling Midtown neighborhood, we're surrounded by Detroit's premier cultural attractions. 
            Wayne State University students have made us their go-to spot for late-night study fuel, while professionals 
            from the nearby medical district rely on us for quick, delicious lunches. Our proximity to the Detroit Institute 
            of Arts and various theaters makes us the perfect dining destination before a night out.
          </p>
          <p>
            What makes our Midtown location special? Beyond our famous menu items like the Royale with Cheese and 
            Big Kahuna Burger, we've become a community gathering place. Our walls feature local artists' work, and 
            we regularly host Wayne State student nights with special discounts. We're proud to source ingredients 
            from local Detroit suppliers whenever possible, supporting the city we call home.
          </p>
          <p>
            Whether you're a Midtown resident, Wayne State student, medical professional, or exploring Detroit's 
            cultural district, Royale with Cheese offers more than just a meal – it's an experience. With easy 
            parking, quick service, and a menu that satisfies every craving, we're your Midtown destination for 
            the best burgers in Detroit. Visit us today at 4163 Cass Ave or call 313-525-2424 for takeout and delivery!
          </p>
        </SEOContent>
      </SEOSection>
    </LocationPageContainer>
  );
};

export default MidtownDetroitPage;