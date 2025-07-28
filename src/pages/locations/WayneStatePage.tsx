import React from 'react';
import styled from 'styled-components';
import { GraduationCap, Clock, CreditCard, Users } from 'lucide-react';

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

const StudentDealsSection = styled.section`
  background: linear-gradient(135deg, #DC2626, #991B1B);
  border-radius: 12px;
  padding: 50px;
  margin: 60px 0;
  text-align: center;
`;

const DealsTitle = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 30px;
`;

const DealsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

const DealCard = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 25px;
  border-radius: 8px;
  border: 2px solid #FFD700;
  
  h3 {
    color: #FFD700;
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
  
  p {
    color: #fff;
    line-height: 1.6;
  }
  
  .discount {
    font-size: 2rem;
    font-weight: bold;
    color: #FFD700;
    margin: 10px 0;
  }
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
  border: 2px solid #FFD700;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
  }
`;

const InfoTitle = styled.h2`
  font-size: 1.5rem;
  color: #FFD700;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InfoContent = styled.div`
  color: #ccc;
  line-height: 1.8;
  
  ul {
    list-style: none;
    padding: 0;
    margin: 15px 0;
  }
  
  li {
    padding: 8px 0;
    display: flex;
    align-items: center;
    gap: 10px;
    
    &::before {
      content: '✓';
      color: #DC2626;
      font-weight: bold;
    }
  }
`;

const CampusSection = styled.section`
  margin: 60px 0;
`;

const CampusTitle = styled.h2`
  font-size: 2.5rem;
  color: #DC2626;
  text-align: center;
  margin-bottom: 40px;
`;

const CampusGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
`;

const CampusLocation = styled.div`
  background: #2d2d2d;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #DC2626;
  
  h3 {
    color: #DC2626;
    margin-bottom: 10px;
    font-size: 1.25rem;
  }
  
  p {
    color: #999;
    font-size: 0.95rem;
    line-height: 1.6;
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
  color: #FFD700;
  margin-bottom: 20px;
`;

const SEOContent = styled.div`
  color: #ccc;
  line-height: 1.8;
  
  p {
    margin-bottom: 15px;
  }
`;

const StudySection = styled.section`
  background: #2d2d2d;
  border-radius: 12px;
  padding: 40px;
  margin: 40px 0;
  text-align: center;
  
  h2 {
    color: #FFD700;
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  p {
    color: #ccc;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const WayneStatePage: React.FC = () => {
  return (
    <LocationPageContainer>
      <PageHeader>
        <Title>Royale with Cheese - Wayne State</Title>
        <Subtitle>
          The unofficial dining hall of Wayne State Warriors! Just minutes from campus, 
          we're your go-to spot for study fuel, late-night cravings, and group hangouts.
        </Subtitle>
      </PageHeader>

      <StudentDealsSection>
        <DealsTitle>Wayne State Student Specials</DealsTitle>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
          Show your OneCard for exclusive deals!
        </p>
        <DealsGrid>
          <DealCard>
            <h3>Study Break Special</h3>
            <div className="discount">15% OFF</div>
            <p>Any burger combo<br />Valid Sun-Thu, 2-5 PM</p>
          </DealCard>
          <DealCard>
            <h3>Late Night Deal</h3>
            <div className="discount">$8.99</div>
            <p>Classic burger + fries<br />After 9 PM daily</p>
          </DealCard>
          <DealCard>
            <h3>Group Study Pack</h3>
            <div className="discount">20% OFF</div>
            <p>Orders over $50<br />Perfect for study groups!</p>
          </DealCard>
        </DealsGrid>
      </StudentDealsSection>

      <InfoGrid>
        <InfoCard>
          <InfoTitle>
            <Clock size={24} />
            Student-Friendly Hours
          </InfoTitle>
          <InfoContent>
            <ul>
              <li>Open late during finals week</li>
              <li>Quick lunch service between classes</li>
              <li>Late-night menu until 11 PM Fri-Sat</li>
              <li>Early opening at 11 AM for brunch</li>
            </ul>
          </InfoContent>
        </InfoCard>

        <InfoCard>
          <InfoTitle>
            <CreditCard size={24} />
            Payment Options
          </InfoTitle>
          <InfoContent>
            <ul>
              <li>All major credit/debit cards</li>
              <li>Mobile payments (Apple Pay, Google Pay)</li>
              <li>Cash always welcome</li>
              <li>Group payment splitting available</li>
            </ul>
          </InfoContent>
        </InfoCard>

        <InfoCard>
          <InfoTitle>
            <Users size={24} />
            Perfect for Students
          </InfoTitle>
          <InfoContent>
            <ul>
              <li>Free WiFi for studying</li>
              <li>Large tables for group projects</li>
              <li>Quick takeout between classes</li>
              <li>Delivery to campus buildings</li>
            </ul>
          </InfoContent>
        </InfoCard>
      </InfoGrid>

      <CampusSection>
        <CampusTitle>Distance from Wayne State Buildings</CampusTitle>
        <CampusGrid>
          <CampusLocation>
            <h3>Student Center</h3>
            <p>0.4 miles - 8 minute walk<br />Perfect for a quick lunch break</p>
          </CampusLocation>
          <CampusLocation>
            <h3>Main Library</h3>
            <p>0.5 miles - 10 minute walk<br />Study fuel delivered!</p>
          </CampusLocation>
          <CampusLocation>
            <h3>State Hall</h3>
            <p>0.3 miles - 6 minute walk<br />Closest building to us</p>
          </CampusLocation>
          <CampusLocation>
            <h3>Engineering Building</h3>
            <p>0.6 miles - 12 minute walk<br />We deliver for group orders</p>
          </CampusLocation>
          <CampusLocation>
            <h3>Law School</h3>
            <p>0.7 miles - 14 minute walk<br />Popular with law students</p>
          </CampusLocation>
          <CampusLocation>
            <h3>Medical School</h3>
            <p>0.8 miles - 15 minute walk<br />Quick delivery available</p>
          </CampusLocation>
        </CampusGrid>
      </CampusSection>

      <StudySection>
        <h2>Study Space Available</h2>
        <p>
          Need a change of scenery from the library? Our dining room has plenty of space, 
          free WiFi, and endless coffee refills. Many WSU students use Royale with Cheese 
          as their alternative study spot – come for the food, stay for the productive vibes!
        </p>
      </StudySection>

      <SEOSection>
        <SEOTitle>Wayne State's Favorite Off-Campus Dining</SEOTitle>
        <SEOContent>
          <p>
            Royale with Cheese has become an essential part of the Wayne State University experience. 
            Located just minutes from campus at 4163 Cass Ave, we've been fueling Warriors through 
            late-night study sessions, celebrating post-exam victories, and providing the perfect 
            spot for everything from first dates to group project meetings.
          </p>
          <p>
            Why do Wayne State students choose us? It starts with our unbeatable student discounts – 
            show your OneCard for 15% off during our Study Break Special hours. But it's more than 
            just the deals. Our Pulp Fiction-themed atmosphere provides a fun break from campus life, 
            while our menu offers something for everyone, from our famous Royale with Cheese burger 
            to vegetarian options like the Mia Wallace.
          </p>
          <p>
            We understand student life. That's why we offer free WiFi for studying, stay open late 
            during finals week, and provide quick service for those tight between-class windows. 
            Our large tables accommodate study groups, and our relaxed atmosphere makes us perfect 
            for both solo studying and social gatherings. Plus, we deliver to most campus buildings 
            for those marathon library sessions.
          </p>
          <p>
            From freshman orientation week to graduation celebrations, Royale with Cheese is here 
            for every moment of your Wayne State journey. Join thousands of Warriors who've made 
            us their go-to spot for great food and good times. Call 313-525-2424 for pickup or 
            delivery, or walk over from campus – we're closer than you think! Go Warriors!
          </p>
        </SEOContent>
      </SEOSection>
    </LocationPageContainer>
  );
};

export default WayneStatePage;