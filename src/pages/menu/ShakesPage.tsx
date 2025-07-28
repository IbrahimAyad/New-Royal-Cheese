import React from 'react';
import styled from 'styled-components';

const ShakesPageContainer = styled.div`
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
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ShakeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 35px;
  margin-bottom: 60px;
`;

const ShakeCard = styled.article`
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border-radius: 12px;
  padding: 30px;
  border: 2px solid #FF69B4;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(255, 105, 180, 0.3);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 105, 180, 0.1) 0%, transparent 70%);
    animation: pulse 3s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
`;

const ShakeName = styled.h2`
  font-size: 1.75rem;
  color: #FF69B4;
  margin-bottom: 15px;
  font-weight: 700;
  position: relative;
  z-index: 1;
`;

const ShakeDescription = styled.p`
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
`;

const ShakePrice = styled.div`
  font-size: 1.5rem;
  color: #FFD700;
  font-weight: 700;
  position: relative;
  z-index: 1;
`;

const FamousBadge = styled.span`
  display: inline-block;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  color: #000;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.875rem;
  margin-left: 10px;
  font-weight: 600;
`;

const SEOSection = styled.section`
  background: #1a1a1a;
  padding: 40px;
  border-radius: 12px;
  margin: 60px 0;
`;

const SEOTitle = styled.h3`
  font-size: 2rem;
  color: #FF69B4;
  margin-bottom: 20px;
`;

const SEOContent = styled.div`
  color: #ccc;
  line-height: 1.8;
  
  p {
    margin-bottom: 15px;
  }
`;

const SpecialNote = styled.div`
  background: linear-gradient(135deg, #2d2d2d, #1a1a1a);
  border: 2px solid #FFD700;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  margin: 40px 0;
  
  h3 {
    color: #FFD700;
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
  
  p {
    color: #ccc;
    line-height: 1.6;
  }
`;

const shakes = [
  {
    name: "The $5 Shake",
    description: "The famous shake from Jack Rabbit Slim's! Premium vanilla ice cream, real bourbon vanilla, and a secret ingredient that makes it worth every penny",
    price: "$5.00",
    famous: true
  },
  {
    name: "Chocolate Overdose",
    description: "Triple chocolate ice cream, chocolate syrup, chocolate chips, and whipped cream. For serious chocolate lovers only",
    price: "$6.99"
  },
  {
    name: "Strawberry Fields",
    description: "Fresh strawberry ice cream blended with real strawberries, topped with whipped cream and a fresh berry",
    price: "$6.99"
  },
  {
    name: "Peanut Butter Cup",
    description: "Creamy peanut butter ice cream with chocolate swirls and crushed peanut butter cups throughout",
    price: "$7.99"
  },
  {
    name: "Cookies & Cream Dream",
    description: "Vanilla ice cream loaded with Oreo cookies, topped with whipped cream and cookie crumbles",
    price: "$6.99"
  },
  {
    name: "Salted Caramel Bliss",
    description: "Caramel ice cream with sea salt, caramel ribbons, and toffee pieces, finished with caramel drizzle",
    price: "$7.99"
  },
  {
    name: "Motor City Mint",
    description: "Mint chocolate chip ice cream with fudge swirls and chocolate shavings - a Detroit exclusive!",
    price: "$6.99"
  },
  {
    name: "Birthday Cake Bash",
    description: "Cake batter ice cream with rainbow sprinkles, whipped cream, and a birthday candle on request",
    price: "$7.99"
  }
];

const ShakesPage: React.FC = () => {
  return (
    <ShakesPageContainer>
      <PageHeader>
        <Title>Legendary Shakes</Title>
        <Subtitle>
          Hand-spun milkshakes that would make Vincent and Mia dance again
        </Subtitle>
      </PageHeader>

      <ShakeGrid>
        {shakes.map((shake, index) => (
          <ShakeCard key={index}>
            <ShakeName>
              {shake.name}
              {shake.famous && <FamousBadge>FAMOUS</FamousBadge>}
            </ShakeName>
            <ShakeDescription>{shake.description}</ShakeDescription>
            <ShakePrice>{shake.price}</ShakePrice>
          </ShakeCard>
        ))}
      </ShakeGrid>

      <SpecialNote>
        <h3>Make It Extra Special</h3>
        <p>
          Add malt for $0.75 | Extra thick +$1.00 | Make it a float +$1.50 | Add alcohol +$3.00 (21+ only)
        </p>
      </SpecialNote>

      <SEOSection>
        <SEOTitle>Detroit's Most Instagram-Worthy Shakes</SEOTitle>
        <SEOContent>
          <p>
            At Royale with Cheese, our milkshakes are more than just drinks – they're an experience. Inspired by the 
            iconic "$5 Shake" from Pulp Fiction, we've created a menu of hand-spun milkshakes that live up to the hype. 
            Using premium ice cream and real ingredients, each shake is crafted to perfection.
          </p>
          <p>
            Located in Midtown Detroit at 4163 Cass Ave, we've become famous for our thick, creamy shakes that pair 
            perfectly with our gourmet burgers. Our $5 Shake pays homage to the film that inspired our restaurant, 
            featuring premium vanilla ice cream and a secret ingredient that makes it truly special.
          </p>
          <p>
            From classic flavors like chocolate and strawberry to unique creations like Motor City Mint, our shake menu 
            offers something for everyone. We use only the finest ingredients, including real fruit, premium chocolate, 
            and locally-sourced dairy when possible.
          </p>
          <p>
            Visit us today or call 313-525-2424 to order. Whether you're cooling down on a hot Detroit summer day or 
            treating yourself after a Wayne State class, our shakes are the perfect indulgence. Try our famous $5 Shake 
            and discover why people say it's worth every penny!
          </p>
        </SEOContent>
      </SEOSection>
    </ShakesPageContainer>
  );
};

export default ShakesPage;