import React from 'react';
import styled from 'styled-components';
import { Phone, Mail, Users, Calendar, CheckCircle } from 'lucide-react';

const CateringPageContainer = styled.div`
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

const CateringOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
`;

const OptionCard = styled.div`
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border-radius: 12px;
  padding: 35px;
  border: 2px solid #DC2626;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(220, 38, 38, 0.3);
  }
`;

const OptionTitle = styled.h2`
  font-size: 1.75rem;
  color: #DC2626;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const OptionDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DetailItem = styled.li`
  color: #ccc;
  margin-bottom: 12px;
  padding-left: 25px;
  position: relative;
  line-height: 1.6;
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #FFD700;
    font-weight: bold;
  }
`;

const ContactSection = styled.section`
  background: linear-gradient(135deg, #DC2626, #991B1B);
  border-radius: 12px;
  padding: 50px;
  text-align: center;
  margin: 60px 0;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 30px;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

const ContactMethod = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #fff;
  text-decoration: none;
  padding: 20px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.3);
    transform: translateY(-3px);
  }
`;

const MenuPackages = styled.div`
  margin: 60px 0;
`;

const PackageTitle = styled.h2`
  font-size: 2.5rem;
  color: #FFD700;
  text-align: center;
  margin-bottom: 40px;
`;

const PackageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const Package = styled.div`
  background: #1a1a1a;
  border: 2px solid #FFD700;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
`;

const PackageName = styled.h3`
  font-size: 1.5rem;
  color: #FFD700;
  margin-bottom: 15px;
`;

const PackagePrice = styled.div`
  font-size: 2rem;
  color: #DC2626;
  font-weight: bold;
  margin-bottom: 20px;
`;

const PackageDescription = styled.p`
  color: #ccc;
  line-height: 1.6;
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

const CateringPage: React.FC = () => {
  return (
    <CateringPageContainer>
      <PageHeader>
        <Title>Catering Services</Title>
        <Subtitle>
          Bring the Royale with Cheese experience to your next event. 
          From corporate lunches to private parties, we've got you covered!
        </Subtitle>
      </PageHeader>

      <CateringOptions>
        <OptionCard>
          <OptionTitle>
            <Users size={28} />
            Corporate Events
          </OptionTitle>
          <OptionDetails>
            <DetailItem>Team lunches and meetings</DetailItem>
            <DetailItem>Company parties and celebrations</DetailItem>
            <DetailItem>Training sessions and workshops</DetailItem>
            <DetailItem>Client entertainment events</DetailItem>
            <DetailItem>Minimum order: 10 people</DetailItem>
            <DetailItem>Professional setup available</DetailItem>
          </OptionDetails>
        </OptionCard>

        <OptionCard>
          <OptionTitle>
            <Calendar size={28} />
            Private Parties
          </OptionTitle>
          <OptionDetails>
            <DetailItem>Birthday celebrations</DetailItem>
            <DetailItem>Graduation parties</DetailItem>
            <DetailItem>Game day gatherings</DetailItem>
            <DetailItem>Family reunions</DetailItem>
            <DetailItem>Customizable menu options</DetailItem>
            <DetailItem>Delivery and setup included</DetailItem>
          </OptionDetails>
        </OptionCard>
      </CateringOptions>

      <MenuPackages>
        <PackageTitle>Popular Catering Packages</PackageTitle>
        <PackageGrid>
          <Package>
            <PackageName>The Classic</PackageName>
            <PackagePrice>$12.99/person</PackagePrice>
            <PackageDescription>
              Choice of burger, classic fries, and soft drink. Perfect for casual gatherings.
            </PackageDescription>
          </Package>
          
          <Package>
            <PackageName>The Deluxe</PackageName>
            <PackagePrice>$16.99/person</PackagePrice>
            <PackageDescription>
              Premium burger selection, choice of side, shake or drink, and dessert.
            </PackageDescription>
          </Package>
          
          <Package>
            <PackageName>The VIP</PackageName>
            <PackagePrice>$21.99/person</PackagePrice>
            <PackageDescription>
              Full menu access, appetizers, premium sides, shakes, and gourmet desserts.
            </PackageDescription>
          </Package>
        </PackageGrid>
      </MenuPackages>

      <ContactSection>
        <ContactTitle>Ready to Order?</ContactTitle>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
          Contact us today to discuss your catering needs!
        </p>
        <ContactGrid>
          <ContactMethod href="tel:313-525-2424">
            <Phone size={40} />
            <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>313-525-2424</span>
            <span>Call to Order</span>
          </ContactMethod>
          
          <ContactMethod href="mailto:catering@royalewithcheese.menu">
            <Mail size={40} />
            <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Email Us</span>
            <span>catering@royalewithcheese.menu</span>
          </ContactMethod>
        </ContactGrid>
      </ContactSection>

      <SEOSection>
        <SEOTitle>Detroit's Premier Burger Catering</SEOTitle>
        <SEOContent>
          <p>
            Royale with Cheese offers comprehensive catering services throughout the Detroit metropolitan area. 
            Our Pulp Fiction-inspired menu brings excitement and flavor to any event, from intimate gatherings 
            to large corporate functions. With our location at 4163 Cass Ave in Midtown Detroit, we're perfectly 
            positioned to serve Wayne State University, downtown businesses, and the greater Detroit area.
          </p>
          <p>
            Our catering menu features all your favorites from our restaurant, including the famous Royale with 
            Cheese burger, Big Kahuna Burger, hand-cut fries, and our legendary $5 Shake. We accommodate special 
            dietary needs with vegetarian options like the Mia Wallace burger and can customize packages to fit 
            your specific requirements.
          </p>
          <p>
            What sets our catering apart? Fresh, never frozen beef patties, locally sourced ingredients when 
            possible, and a commitment to delivering restaurant-quality food to your location. Our professional 
            catering team ensures timely delivery, proper setup, and an experience that will have your guests 
            talking long after the event.
          </p>
          <p>
            Book your catering order today by calling 313-525-2424. We recommend ordering at least 48 hours in 
            advance for large events. From office lunches in downtown Detroit to private parties in the suburbs, 
            Royale with Cheese catering makes every event memorable!
          </p>
        </SEOContent>
      </SEOSection>
    </CateringPageContainer>
  );
};

export default CateringPage;