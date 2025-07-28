import React from 'react';
import styled from 'styled-components';
import { MapPin, Users, Building, Heart } from 'lucide-react';

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

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`;

const FeatureCard = styled.div`
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

const FeatureTitle = styled.h2`
  font-size: 1.5rem;
  color: #FFD700;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FeatureContent = styled.div`
  color: #ccc;
  line-height: 1.8;
  
  ul {
    list-style: none;
    padding: 0;
    margin: 15px 0;
  }
  
  li {
    padding: 8px 0;
    padding-left: 20px;
    position: relative;
    
    &::before {
      content: '→';
      position: absolute;
      left: 0;
      color: #DC2626;
    }
  }
`;

const CommunitySection = styled.section`
  background: #1a1a1a;
  border-radius: 12px;
  padding: 50px;
  margin: 60px 0;
`;

const CommunityTitle = styled.h2`
  font-size: 2.5rem;
  color: #DC2626;
  margin-bottom: 30px;
  text-align: center;
`;

const CommunityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const CommunityItem = styled.div`
  text-align: center;
  
  h3 {
    color: #FFD700;
    font-size: 1.25rem;
    margin-bottom: 15px;
  }
  
  p {
    color: #ccc;
    line-height: 1.6;
  }
`;

const TestimonialSection = styled.section`
  margin: 60px 0;
`;

const TestimonialTitle = styled.h2`
  font-size: 2.5rem;
  color: #FFD700;
  text-align: center;
  margin-bottom: 40px;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
`;

const Testimonial = styled.blockquote`
  background: #2d2d2d;
  padding: 30px;
  border-radius: 8px;
  border-left: 4px solid #DC2626;
  
  p {
    color: #ccc;
    font-style: italic;
    margin-bottom: 15px;
    line-height: 1.6;
  }
  
  footer {
    color: #FFD700;
    font-weight: bold;
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

const CassCorridorPage: React.FC = () => {
  return (
    <LocationPageContainer>
      <PageHeader>
        <Title>Royale with Cheese - Cass Corridor</Title>
        <Subtitle>
          Proudly serving the historic Cass Corridor community with Detroit's best burgers. 
          A neighborhood favorite where art, culture, and amazing food come together!
        </Subtitle>
      </PageHeader>

      <FeatureGrid>
        <FeatureCard>
          <FeatureTitle>
            <Building size={24} />
            In the Heart of Cass Corridor
          </FeatureTitle>
          <FeatureContent>
            <p>
              Located on the iconic Cass Avenue, we're part of the vibrant tapestry that makes 
              Cass Corridor one of Detroit's most dynamic neighborhoods.
            </p>
            <ul>
              <li>Walking distance from historic venues</li>
              <li>Near art galleries and studios</li>
              <li>Close to independent bookstores</li>
              <li>Part of the local business community</li>
            </ul>
          </FeatureContent>
        </FeatureCard>

        <FeatureCard>
          <FeatureTitle>
            <Users size={24} />
            Community Focused
          </FeatureTitle>
          <FeatureContent>
            <p>
              We're more than just a restaurant – we're a gathering place for the diverse 
              Cass Corridor community.
            </p>
            <ul>
              <li>Student discounts for local colleges</li>
              <li>Artist showcase nights</li>
              <li>Community board for local events</li>
              <li>Support for neighborhood initiatives</li>
            </ul>
          </FeatureContent>
        </FeatureCard>

        <FeatureCard>
          <FeatureTitle>
            <Heart size={24} />
            Local Love
          </FeatureTitle>
          <FeatureContent>
            <p>
              We believe in supporting our neighbors and contributing to the Cass Corridor renaissance.
            </p>
            <ul>
              <li>Locally sourced ingredients</li>
              <li>Partnerships with area businesses</li>
              <li>Employment for local residents</li>
              <li>Sponsor of community events</li>
            </ul>
          </FeatureContent>
        </FeatureCard>
      </FeatureGrid>

      <CommunitySection>
        <CommunityTitle>Why Cass Corridor Loves Us</CommunityTitle>
        <CommunityGrid>
          <CommunityItem>
            <h3>Authentic Experience</h3>
            <p>
              Our Pulp Fiction theme resonates with the artistic and cultural vibe of Cass Corridor, 
              creating a unique dining experience that locals appreciate.
            </p>
          </CommunityItem>
          <CommunityItem>
            <h3>Late Night Hours</h3>
            <p>
              We understand the neighborhood's rhythm – open late for students, artists, and night owls 
              who need quality food at all hours.
            </p>
          </CommunityItem>
          <CommunityItem>
            <h3>Inclusive Atmosphere</h3>
            <p>
              Everyone's welcome at Royale with Cheese. Our diverse menu and welcoming space reflect 
              the inclusive spirit of Cass Corridor.
            </p>
          </CommunityItem>
        </CommunityGrid>
      </CommunitySection>

      <TestimonialSection>
        <TestimonialTitle>What Our Neighbors Say</TestimonialTitle>
        <TestimonialGrid>
          <Testimonial>
            <p>
              "As a long-time Cass Corridor resident, I've seen many businesses come and go. 
              Royale with Cheese gets it – they're part of the community, not just in it. 
              Best burgers in Detroit, hands down!"
            </p>
            <footer>- Maria S., Local Artist</footer>
          </Testimonial>
          <Testimonial>
            <p>
              "The vibe here matches perfectly with Cass Corridor's creative energy. 
              Plus, their vegetarian options are actually good – the Mia Wallace burger is my go-to!"
            </p>
            <footer>- James T., CCS Student</footer>
          </Testimonial>
        </TestimonialGrid>
      </TestimonialSection>

      <SEOSection>
        <SEOTitle>Royale with Cheese: A Cass Corridor Institution</SEOTitle>
        <SEOContent>
          <p>
            Royale with Cheese has become an integral part of the Cass Corridor dining scene, bringing 
            our unique Pulp Fiction-inspired concept to one of Detroit's most historically rich and 
            culturally diverse neighborhoods. Located at 4163 Cass Ave, we're perfectly positioned to 
            serve the eclectic mix of students, artists, professionals, and long-time residents who 
            call Cass Corridor home.
          </p>
          <p>
            The Cass Corridor, known for its artistic heritage and urban renaissance, provides the 
            perfect backdrop for our creative burger concepts. From the classic Royale with Cheese 
            to the tropical Big Kahuna Burger, our menu reflects the neighborhood's appreciation for 
            both tradition and innovation. We've embraced the corridor's creative spirit by featuring 
            local artists' work on our walls and hosting community events that bring neighbors together.
          </p>
          <p>
            What sets us apart in Cass Corridor? Beyond our commitment to quality – using fresh, 
            never frozen beef and locally sourced ingredients – we've built genuine connections with 
            our community. We offer student discounts for nearby Wayne State University and College 
            for Creative Studies students, support local initiatives, and maintain hours that accommodate 
            the neighborhood's diverse schedules, from early-rising professionals to late-night creatives.
          </p>
          <p>
            Whether you're a Cass Corridor resident exploring your neighborhood, a visitor discovering 
            Detroit's cultural gems, or a student looking for a great meal between classes, Royale with 
            Cheese welcomes you. Experience why we've become Cass Corridor's favorite burger destination. 
            Call 313-525-2424 for takeout or delivery, or better yet, stop by and become part of our 
            community. In Cass Corridor, great food and great neighbors come together at Royale with Cheese!
          </p>
        </SEOContent>
      </SEOSection>
    </LocationPageContainer>
  );
};

export default CassCorridorPage;