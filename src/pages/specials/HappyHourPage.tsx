import React from 'react';
import styled from 'styled-components';
import { Clock, DollarSign, Calendar, PartyPopper } from 'lucide-react';

const SpecialPageContainer = styled.div`
  padding: 80px 20px 40px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #000;
  color: #fff;
`;

const PageHeader = styled.header`
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  
  &::before, &::after {
    content: '🍔';
    font-size: 3rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    animation: bounce 2s infinite;
  }
  
  &::before {
    left: 10%;
  }
  
  &::after {
    right: 10%;
  }
  
  @keyframes bounce {
    0%, 100% { transform: translateY(-50%); }
    50% { transform: translateY(-70%); }
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #DC2626;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TimeSlot = styled.p`
  font-size: 2rem;
  color: #FFD700;
  font-weight: 900;
  margin-bottom: 30px;
`;

const DealsSection = styled.section`
  margin: 60px 0;
`;

const DealsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
`;

const DealCard = styled.div`
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border-radius: 12px;
  padding: 35px;
  border: 3px solid #FFD700;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(255, 215, 0, 0.4);
  }
  
  &::before {
    content: 'DEAL';
    position: absolute;
    top: 20px;
    right: -30px;
    background: #DC2626;
    color: #fff;
    padding: 5px 40px;
    transform: rotate(45deg);
    font-weight: bold;
    font-size: 0.875rem;
  }
`;

const DealTitle = styled.h2`
  font-size: 1.75rem;
  color: #FFD700;
  margin-bottom: 15px;
`;

const DealPrice = styled.div`
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 20px;
  
  .original {
    font-size: 1.5rem;
    color: #666;
    text-decoration: line-through;
  }
  
  .special {
    font-size: 2.5rem;
    color: #DC2626;
    font-weight: 900;
  }
`;

const DealDescription = styled.p`
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const DealHighlight = styled.div`
  background: rgba(255, 215, 0, 0.1);
  border-left: 4px solid #FFD700;
  padding: 15px;
  margin-top: 20px;
  border-radius: 4px;
  
  p {
    color: #FFD700;
    font-weight: 600;
    margin: 0;
  }
`;

const RulesSection = styled.section`
  background: #1a1a1a;
  border-radius: 12px;
  padding: 40px;
  margin: 60px 0;
`;

const RulesTitle = styled.h2`
  font-size: 2rem;
  color: #DC2626;
  margin-bottom: 25px;
  text-align: center;
`;

const RulesList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    color: #ccc;
    padding: 10px 0;
    padding-left: 30px;
    position: relative;
    line-height: 1.6;
    
    &::before {
      content: '📌';
      position: absolute;
      left: 0;
    }
  }
`;

const CTASection = styled.section`
  background: linear-gradient(135deg, #FFD700, #FFA500);
  border-radius: 12px;
  padding: 60px;
  text-align: center;
  margin: 60px 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(255, 255, 255, 0.1) 10px,
      rgba(255, 255, 255, 0.1) 20px
    );
    animation: slide 20s linear infinite;
  }
  
  @keyframes slide {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
  }
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 1;
  
  h2 {
    font-size: 3rem;
    color: #000;
    margin-bottom: 20px;
    font-weight: 900;
  }
  
  p {
    font-size: 1.5rem;
    color: #000;
    margin-bottom: 30px;
    font-weight: 600;
  }
  
  a {
    display: inline-block;
    background: #000;
    color: #FFD700;
    padding: 20px 50px;
    border-radius: 50px;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }
  }
`;

const HappyHourPage: React.FC = () => {
  const deals = [
    {
      title: "Burger & Beer Combo",
      originalPrice: "$16.99",
      specialPrice: "$9.99",
      description: "Any classic burger with a domestic draft beer",
      highlight: "Most Popular Happy Hour Deal!"
    },
    {
      title: "Appetizer Frenzy",
      originalPrice: "$8-12",
      specialPrice: "50% OFF",
      description: "All appetizers half price - wings, mozzarella sticks, onion rings, and more",
      highlight: "Perfect for sharing!"
    },
    {
      title: "Shake Happy Hour",
      originalPrice: "$6.99",
      specialPrice: "$4.99",
      description: "All regular shakes including our famous $5 Shake",
      highlight: "Yes, even the $5 Shake is on special!"
    },
    {
      title: "Loaded Fries Special",
      originalPrice: "$8.99",
      specialPrice: "$5.99",
      description: "Our famous loaded bacon cheese fries",
      highlight: "Add to any burger for just $3 more"
    }
  ];

  return (
    <SpecialPageContainer>
      <PageHeader>
        <Title>Happy Hour</Title>
        <Subtitle>Detroit's Happiest Hour!</Subtitle>
        <TimeSlot>Monday - Friday • 3:00 PM - 6:00 PM</TimeSlot>
      </PageHeader>

      <DealsSection>
        <DealsGrid>
          {deals.map((deal, index) => (
            <DealCard key={index}>
              <DealTitle>{deal.title}</DealTitle>
              <DealPrice>
                <span className="original">{deal.originalPrice}</span>
                <span className="special">{deal.specialPrice}</span>
              </DealPrice>
              <DealDescription>{deal.description}</DealDescription>
              <DealHighlight>
                <p>{deal.highlight}</p>
              </DealHighlight>
            </DealCard>
          ))}
        </DealsGrid>
      </DealsSection>

      <CTASection>
        <CTAContent>
          <h2>Join Us for Happy Hour!</h2>
          <p>Call ahead to reserve your table</p>
          <a href="tel:313-525-2424">📞 313-525-2424</a>
        </CTAContent>
      </CTASection>

      <RulesSection>
        <RulesTitle>Happy Hour Guidelines</RulesTitle>
        <RulesList>
          <li>Valid Monday through Friday, 3:00 PM - 6:00 PM only</li>
          <li>Dine-in only (no takeout or delivery for happy hour prices)</li>
          <li>Must be 21+ for alcohol specials with valid ID</li>
          <li>Cannot be combined with other offers or student discounts</li>
          <li>Limit one happy hour special per item per person</li>
          <li>Subject to availability - first come, first served</li>
          <li>Management reserves the right to modify or end specials</li>
        </RulesList>
      </RulesSection>
    </SpecialPageContainer>
  );
};

export default HappyHourPage;