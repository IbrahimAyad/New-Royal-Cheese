import React from 'react';
import styled from 'styled-components';
import { GraduationCap, Percent, Calendar, CheckCircle } from 'lucide-react';

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
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  color: #DC2626;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #FFD700;
  font-weight: bold;
  margin-bottom: 30px;
`;

const BenefitsSection = styled.section`
  margin: 60px 0;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const BenefitCard = styled.div`
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border-radius: 12px;
  padding: 30px;
  border: 2px solid #FFD700;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
  }
`;

const BenefitIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const BenefitTitle = styled.h3`
  font-size: 1.5rem;
  color: #FFD700;
  margin-bottom: 15px;
`;

const BenefitDescription = styled.p`
  color: #ccc;
  line-height: 1.6;
`;

const EligibilitySection = styled.section`
  background: #1a1a1a;
  border-radius: 12px;
  padding: 50px;
  margin: 60px 0;
`;

const EligibilityTitle = styled.h2`
  font-size: 2.5rem;
  color: #DC2626;
  margin-bottom: 30px;
  text-align: center;
`;

const SchoolGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const SchoolItem = styled.div`
  background: #2d2d2d;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #444;
  
  &:hover {
    border-color: #FFD700;
  }
`;

const HowItWorksSection = styled.section`
  margin: 60px 0;
`;

const StepsTitle = styled.h2`
  font-size: 2.5rem;
  color: #FFD700;
  text-align: center;
  margin-bottom: 50px;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 60px;
    left: 25%;
    right: 25%;
    height: 2px;
    background: linear-gradient(to right, #DC2626, #FFD700, #DC2626);
    z-index: 0;
    
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const Step = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
`;

const StepNumber = styled.div`
  width: 80px;
  height: 80px;
  background: #DC2626;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  margin: 0 auto 20px;
  position: relative;
  z-index: 2;
`;

const StepTitle = styled.h3`
  font-size: 1.25rem;
  color: #FFD700;
  margin-bottom: 10px;
`;

const StepDescription = styled.p`
  color: #ccc;
  line-height: 1.6;
`;

const FAQSection = styled.section`
  background: #2d2d2d;
  border-radius: 12px;
  padding: 40px;
  margin: 60px 0;
`;

const FAQTitle = styled.h2`
  font-size: 2rem;
  color: #DC2626;
  margin-bottom: 30px;
  text-align: center;
`;

const FAQItem = styled.div`
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid #444;
  
  &:last-child {
    border-bottom: none;
  }
`;

const Question = styled.h3`
  font-size: 1.25rem;
  color: #FFD700;
  margin-bottom: 10px;
`;

const Answer = styled.p`
  color: #ccc;
  line-height: 1.6;
`;

const StudentDiscountPage: React.FC = () => {
  const eligibleSchools = [
    "Wayne State University",
    "University of Detroit Mercy",
    "College for Creative Studies",
    "Wayne County CC",
    "Oakland University",
    "University of Michigan",
    "Michigan State University",
    "Eastern Michigan University",
    "Oakland Community College",
    "Macomb Community College",
    "Henry Ford College",
    "Schoolcraft College"
  ];

  return (
    <SpecialPageContainer>
      <PageHeader>
        <Title>
          <GraduationCap size={60} />
          Student Discount
        </Title>
        <Subtitle>15% OFF Everything with Valid Student ID!</Subtitle>
      </PageHeader>

      <BenefitsSection>
        <BenefitsGrid>
          <BenefitCard>
            <BenefitIcon>🍔</BenefitIcon>
            <BenefitTitle>15% Off All Food</BenefitTitle>
            <BenefitDescription>
              Save on every burger, side, and shake. The discount applies to your entire order!
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard>
            <BenefitIcon>📅</BenefitIcon>
            <BenefitTitle>Valid Every Day</BenefitTitle>
            <BenefitDescription>
              Unlike other places, our student discount is available 7 days a week, all day long!
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard>
            <BenefitIcon>👥</BenefitIcon>
            <BenefitTitle>Group Friendly</BenefitTitle>
            <BenefitDescription>
              Bringing friends? Each student with valid ID gets the discount on their order.
            </BenefitDescription>
          </BenefitCard>
        </BenefitsGrid>
      </BenefitsSection>

      <EligibilitySection>
        <EligibilityTitle>Participating Schools</EligibilityTitle>
        <p style={{ textAlign: 'center', color: '#ccc', marginBottom: '30px' }}>
          We accept valid student IDs from these institutions:
        </p>
        <SchoolGrid>
          {eligibleSchools.map((school, index) => (
            <SchoolItem key={index}>
              <CheckCircle size={20} color="#FFD700" style={{ marginBottom: '5px' }} />
              <p style={{ margin: 0, fontSize: '0.95rem' }}>{school}</p>
            </SchoolItem>
          ))}
        </SchoolGrid>
        <p style={{ textAlign: 'center', color: '#999', marginTop: '30px', fontStyle: 'italic' }}>
          Don't see your school? Talk to our manager about adding it!
        </p>
      </EligibilitySection>

      <HowItWorksSection>
        <StepsTitle>How to Get Your Discount</StepsTitle>
        <StepsGrid>
          <Step>
            <StepNumber>1</StepNumber>
            <StepTitle>Show Your ID</StepTitle>
            <StepDescription>
              Present your valid student ID when ordering (physical or digital accepted)
            </StepDescription>
          </Step>
          
          <Step>
            <StepNumber>2</StepNumber>
            <StepTitle>Order Anything</StepTitle>
            <StepDescription>
              The discount applies to all menu items - no restrictions!
            </StepDescription>
          </Step>
          
          <Step>
            <StepNumber>3</StepNumber>
            <StepTitle>Save 15%</StepTitle>
            <StepDescription>
              We'll automatically apply 15% off your total order
            </StepDescription>
          </Step>
        </StepsGrid>
      </HowItWorksSection>

      <FAQSection>
        <FAQTitle>Student Discount FAQ</FAQTitle>
        <FAQItem>
          <Question>Can I combine the student discount with other offers?</Question>
          <Answer>
            The student discount cannot be combined with Happy Hour specials or other promotional offers. 
            You can choose whichever discount gives you the best value!
          </Answer>
        </FAQItem>
        
        <FAQItem>
          <Question>Does the discount work for online orders?</Question>
          <Answer>
            Currently, the student discount is only available for in-person orders where you can show 
            your student ID. We're working on adding online verification!
          </Answer>
        </FAQItem>
        
        <FAQItem>
          <Question>Do alumni qualify for the discount?</Question>
          <Answer>
            The discount is for current students only. However, we love our alumni and often run 
            special alumni weekends - follow us on social media for updates!
          </Answer>
        </FAQItem>
        
        <FAQItem>
          <Question>What if I forgot my student ID?</Question>
          <Answer>
            We accept digital student IDs through official school apps. If you don't have access to 
            either, you can show your class schedule or tuition receipt along with a photo ID.
          </Answer>
        </FAQItem>
      </FAQSection>
    </SpecialPageContainer>
  );
};

export default StudentDiscountPage;