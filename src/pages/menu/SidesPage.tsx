import React from 'react';
import styled from 'styled-components';

const SidesPageContainer = styled.div`
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

const SidesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`;

const SideCard = styled.article`
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border-radius: 12px;
  padding: 25px;
  border: 2px solid #FFD700;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
  }
`;

const SideName = styled.h2`
  font-size: 1.5rem;
  color: #FFD700;
  margin-bottom: 10px;
  font-weight: 700;
`;

const SideDescription = styled.p`
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 15px;
  font-size: 0.95rem;
`;

const SidePrice = styled.div`
  font-size: 1.25rem;
  color: #DC2626;
  font-weight: 700;
`;

const CategorySection = styled.div`
  margin-bottom: 50px;
`;

const CategoryTitle = styled.h2`
  font-size: 2.5rem;
  color: #DC2626;
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
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

const fries = [
  {
    name: "Classic Cut Fries",
    description: "Hand-cut Idaho potatoes, fried golden and seasoned with our signature spice blend",
    price: "$4.99"
  },
  {
    name: "Truffle Parmesan Fries",
    description: "Crispy fries tossed in truffle oil, topped with shaved parmesan and fresh herbs",
    price: "$7.99"
  },
  {
    name: "Sweet Potato Fries",
    description: "Crispy sweet potato fries served with maple aioli dipping sauce",
    price: "$5.99"
  },
  {
    name: "Loaded Bacon Cheese Fries",
    description: "Our classic fries smothered in cheese sauce, crispy bacon, and green onions",
    price: "$8.99"
  }
];

const other = [
  {
    name: "Onion Rings",
    description: "Beer-battered thick-cut onion rings with ranch dipping sauce",
    price: "$6.99"
  },
  {
    name: "Mozzarella Sticks",
    description: "Six crispy mozzarella sticks served with marinara sauce",
    price: "$7.99"
  },
  {
    name: "Detroit Wings",
    description: "Eight crispy wings tossed in your choice of Buffalo, BBQ, or Dry Rub",
    price: "$10.99"
  },
  {
    name: "Mac & Cheese Bites",
    description: "Deep-fried mac and cheese wedges with sriracha aioli",
    price: "$6.99"
  }
];

const SidesPage: React.FC = () => {
  return (
    <SidesPageContainer>
      <PageHeader>
        <Title>Sides & Starters</Title>
        <Subtitle>
          Perfect companions to our legendary burgers, made fresh daily
        </Subtitle>
      </PageHeader>

      <CategorySection>
        <CategoryTitle>Fries & Potatoes</CategoryTitle>
        <SidesGrid>
          {fries.map((item, index) => (
            <SideCard key={index}>
              <SideName>{item.name}</SideName>
              <SideDescription>{item.description}</SideDescription>
              <SidePrice>{item.price}</SidePrice>
            </SideCard>
          ))}
        </SidesGrid>
      </CategorySection>

      <CategorySection>
        <CategoryTitle>Appetizers & More</CategoryTitle>
        <SidesGrid>
          {other.map((item, index) => (
            <SideCard key={index}>
              <SideName>{item.name}</SideName>
              <SideDescription>{item.description}</SideDescription>
              <SidePrice>{item.price}</SidePrice>
            </SideCard>
          ))}
        </SidesGrid>
      </CategorySection>

      <SEOSection>
        <SEOTitle>Sides That Steal the Show</SEOTitle>
        <SEOContent>
          <p>
            At Royale with Cheese in Midtown Detroit, we believe great burgers deserve equally amazing sides. 
            Our menu features hand-cut fries, crispy onion rings, and innovative appetizers that complement 
            our Pulp Fiction-inspired burger selection perfectly.
          </p>
          <p>
            Every side dish is prepared fresh to order. Our famous fries are cut daily from premium Idaho potatoes, 
            and our signature truffle parmesan fries have become a Detroit favorite. For those seeking something different, 
            our sweet potato fries with maple aioli offer a perfect sweet and savory combination.
          </p>
          <p>
            Located at 4163 Cass Ave, we're proud to serve the Wayne State area and greater Detroit with sides that 
            are anything but secondary. Whether you're dining in, taking out, or ordering delivery, our sides travel 
            well and taste amazing.
          </p>
          <p>
            Call 313-525-2424 to order your favorite sides along with our legendary burgers. From classic cuts to 
            loaded creations, we have the perfect side for every appetite. Visit Royale with Cheese today and discover 
            why our sides are almost as famous as our burgers!
          </p>
        </SEOContent>
      </SEOSection>
    </SidesPageContainer>
  );
};

export default SidesPage;