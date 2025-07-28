import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQPageContainer = styled.div`
  padding: 80px 20px 40px;
  max-width: 1000px;
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
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const CategorySection = styled.section`
  margin-bottom: 50px;
`;

const CategoryTitle = styled.h2`
  font-size: 2rem;
  color: #FFD700;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid #FFD700;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FAQItem = styled.div<{ isOpen: boolean }>`
  background: ${props => props.isOpen ? '#2d2d2d' : '#1a1a1a'};
  border-radius: 8px;
  margin-bottom: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid ${props => props.isOpen ? '#DC2626' : '#333'};
`;

const Question = styled.button`
  width: 100%;
  padding: 20px 25px;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;
  
  &:hover {
    color: #DC2626;
  }
`;

const Answer = styled.div<{ isOpen: boolean }>`
  max-height: ${props => props.isOpen ? '500px' : '0'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  padding: ${props => props.isOpen ? '0 25px 20px' : '0 25px'};
  transition: all 0.3s ease;
  color: #ccc;
  line-height: 1.8;
  
  p {
    margin-bottom: 10px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  ul {
    margin: 10px 0;
    padding-left: 20px;
    
    li {
      margin-bottom: 8px;
    }
  }
`;

const ContactSection = styled.section`
  background: linear-gradient(135deg, #DC2626, #991B1B);
  border-radius: 12px;
  padding: 50px;
  text-align: center;
  margin-top: 60px;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 20px;
`;

const ContactInfo = styled.div`
  font-size: 1.25rem;
  color: #fff;
  
  a {
    color: #FFD700;
    text-decoration: none;
    font-weight: bold;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

interface FAQItemData {
  question: string;
  answer: string | JSX.Element;
}

interface FAQCategory {
  title: string;
  icon: JSX.Element;
  items: FAQItemData[];
}

const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const faqCategories: FAQCategory[] = [
    {
      title: "General Questions",
      icon: <HelpCircle size={24} />,
      items: [
        {
          question: "What are your hours of operation?",
          answer: (
            <div>
              <p><strong>Monday - Thursday:</strong> 11:00 AM - 10:00 PM</p>
              <p><strong>Friday - Saturday:</strong> 11:00 AM - 11:00 PM</p>
              <p><strong>Sunday:</strong> 12:00 PM - 9:00 PM</p>
              <p>Kitchen closes 30 minutes before closing time.</p>
            </div>
          )
        },
        {
          question: "Where are you located?",
          answer: "We're located at 4163 Cass Ave, Detroit, MI 48201 in the heart of Midtown Detroit. We're just minutes from Wayne State University and easily accessible from I-94 and I-75."
        },
        {
          question: "Do you offer delivery?",
          answer: "Yes! We offer delivery through our own drivers within a 3-mile radius. We also partner with major delivery apps. Call 313-525-2424 to place a direct order for the fastest service."
        },
        {
          question: "Is parking available?",
          answer: "Street parking is available on Cass Ave and surrounding streets. We also validate parking for the structure on Willis St (2-hour validation with purchase)."
        }
      ]
    },
    {
      title: "Menu & Dietary",
      icon: <HelpCircle size={24} />,
      items: [
        {
          question: "Do you have vegetarian/vegan options?",
          answer: "Yes! The Mia Wallace is our signature vegetarian burger featuring a black bean patty. We can also modify most menu items to be vegetarian-friendly. For vegan options, please ask your server about modifications."
        },
        {
          question: "Are your burgers gluten-free?",
          answer: "While our beef patties are naturally gluten-free, they are cooked on the same grill as items containing gluten. We offer lettuce wraps as a gluten-free alternative to buns. Please inform your server about any allergies."
        },
        {
          question: "Where do you source your ingredients?",
          answer: "We use premium, never-frozen beef sourced from local Michigan suppliers when possible. Our produce is delivered fresh daily, and we make our signature sauces in-house."
        },
        {
          question: "Can I customize my burger?",
          answer: "Absolutely! While our signature burgers are crafted to perfection, we're happy to accommodate modifications. Add or remove toppings, change your cheese, or build your own creation!"
        }
      ]
    },
    {
      title: "Ordering & Payment",
      icon: <HelpCircle size={24} />,
      items: [
        {
          question: "What payment methods do you accept?",
          answer: (
            <div>
              <p>We accept:</p>
              <ul>
                <li>All major credit and debit cards</li>
                <li>Cash</li>
                <li>Apple Pay and Google Pay</li>
                <li>Gift cards</li>
              </ul>
            </div>
          )
        },
        {
          question: "Can I place a catering order?",
          answer: "Yes! We offer full catering services for events of 10 people or more. Please call 313-525-2424 at least 48 hours in advance to discuss your catering needs."
        },
        {
          question: "Do you take reservations?",
          answer: "We operate on a first-come, first-served basis for regular dining. However, for large groups (8+ people) or special events, please call ahead and we'll do our best to accommodate you."
        },
        {
          question: "How do I order for pickup?",
          answer: "Call us at 313-525-2424 to place your pickup order. We'll give you an estimated time, and your food will be ready when you arrive. You can also order in person."
        }
      ]
    },
    {
      title: "Specials & Discounts",
      icon: <HelpCircle size={24} />,
      items: [
        {
          question: "Do you offer student discounts?",
          answer: "Yes! Students with valid ID receive 15% off their entire order. This discount is available every day and cannot be combined with other offers."
        },
        {
          question: "What's included in Happy Hour?",
          answer: "Happy Hour runs Monday-Friday from 3-6 PM. Enjoy special pricing on burgers and beer combos, 50% off appetizers, and discounted shakes. Dine-in only."
        },
        {
          question: "Do you have a loyalty program?",
          answer: "We're currently developing a loyalty program. Follow us on social media or ask your server to be notified when it launches!"
        },
        {
          question: "Can I buy gift cards?",
          answer: "Yes! Gift cards are available in any amount and can be purchased in-store. They make perfect gifts for the burger lovers in your life."
        }
      ]
    }
  ];

  return (
    <FAQPageContainer>
      <PageHeader>
        <Title>Frequently Asked Questions</Title>
        <Subtitle>
          Everything you need to know about Detroit's favorite burger destination
        </Subtitle>
      </PageHeader>

      {faqCategories.map((category, categoryIndex) => (
        <CategorySection key={categoryIndex}>
          <CategoryTitle>
            {category.icon}
            {category.title}
          </CategoryTitle>
          {category.items.map((item, itemIndex) => {
            const itemId = `${categoryIndex}-${itemIndex}`;
            const isOpen = openItems.has(itemId);
            
            return (
              <FAQItem key={itemIndex} isOpen={isOpen}>
                <Question onClick={() => toggleItem(itemId)}>
                  {item.question}
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </Question>
                <Answer isOpen={isOpen}>
                  {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
                </Answer>
              </FAQItem>
            );
          })}
        </CategorySection>
      ))}

      <ContactSection>
        <ContactTitle>Still Have Questions?</ContactTitle>
        <ContactInfo>
          <p>We're here to help!</p>
          <p style={{ marginTop: '20px' }}>
            Call us at <a href="tel:313-525-2424">313-525-2424</a> or visit us at 4163 Cass Ave
          </p>
        </ContactInfo>
      </ContactSection>
    </FAQPageContainer>
  );
};

export default FAQPage;