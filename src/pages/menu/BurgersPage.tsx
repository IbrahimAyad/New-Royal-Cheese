import React from 'react';
import styled from 'styled-components';

const BurgersPageContainer = styled.div`
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

const BurgerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
`;

const BurgerCard = styled.article`
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

const BurgerName = styled.h2`
  font-size: 1.75rem;
  color: #DC2626;
  margin-bottom: 15px;
  font-weight: 700;
`;

const BurgerDescription = styled.p`
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const BurgerPrice = styled.div`
  font-size: 1.5rem;
  color: #FFD700;
  font-weight: 700;
`;

const SpecialBadge = styled.span`
  display: inline-block;
  background: #DC2626;
  color: #fff;
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

const burgers = [
  {
    name: "The Royale with Cheese",
    description: "Our signature quarter-pound beef patty with melted American cheese, lettuce, tomato, onions, pickles, and our secret sauce. A Pulp Fiction classic!",
    price: "$12.99",
    special: true
  },
  {
    name: "Big Kahuna Burger",
    description: "Hawaiian-inspired masterpiece with teriyaki-glazed beef, grilled pineapple, Swiss cheese, crispy bacon, and spicy mayo.",
    price: "$14.99",
    special: true
  },
  {
    name: "Detroit Classic",
    description: "Locally sourced beef, Michigan cheddar, caramelized onions, house-made pickles, and Motor City sauce.",
    price: "$11.99"
  },
  {
    name: "The Vincent Vega",
    description: "Double smash patties, crispy bacon, aged cheddar, secret sauce, lettuce, and tomato. Cool like Vincent.",
    price: "$13.99"
  },
  {
    name: "Mia Wallace",
    description: "Vegetarian black bean patty with avocado, pepper jack cheese, chipotle aioli, and fresh greens.",
    price: "$10.99"
  },
  {
    name: "The Butch",
    description: "Triple beef patties, three types of cheese, bacon, fried egg, and our championship BBQ sauce.",
    price: "$16.99"
  }
];

const BurgersPage: React.FC = () => {
  return (
    <BurgersPageContainer>
      <PageHeader>
        <Title>Our Legendary Burgers</Title>
        <Subtitle>
          Hand-crafted, flame-grilled perfection inspired by Pulp Fiction and made with love in Detroit
        </Subtitle>
      </PageHeader>

      <BurgerGrid>
        {burgers.map((burger, index) => (
          <BurgerCard key={index}>
            <BurgerName>
              {burger.name}
              {burger.special && <SpecialBadge>SIGNATURE</SpecialBadge>}
            </BurgerName>
            <BurgerDescription>{burger.description}</BurgerDescription>
            <BurgerPrice>{burger.price}</BurgerPrice>
          </BurgerCard>
        ))}
      </BurgerGrid>

      <SEOSection>
        <SEOTitle>About Our Burgers</SEOTitle>
        <SEOContent>
          <p>
            At Royale with Cheese, we take burger crafting seriously. Every patty is made from premium, locally-sourced beef, 
            hand-formed daily, and cooked to perfection on our custom flame grill. Our commitment to quality means never frozen, 
            always fresh ingredients.
          </p>
          <p>
            Located in the heart of Midtown Detroit at 4163 Cass Ave, we've been serving the city's best burgers since our opening. 
            Our Pulp Fiction-inspired menu pays homage to the iconic film while delivering seriously delicious food that keeps 
            Detroiters coming back for more.
          </p>
          <p>
            Whether you're craving our famous Royale with Cheese or the tropical Big Kahuna Burger, each creation is a masterpiece 
            of flavor. We also offer vegetarian options like the Mia Wallace, ensuring everyone can enjoy the Royale experience.
          </p>
          <p>
            Visit us today for dine-in, takeout, or delivery. Call 313-525-2424 to place your order or stop by our Midtown location. 
            Experience why we're Detroit's #1 burger destination!
          </p>
        </SEOContent>
      </SEOSection>
    </BurgersPageContainer>
  );
};

export default BurgersPage;