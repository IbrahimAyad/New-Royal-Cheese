import React from 'react';
import styled from 'styled-components';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const BreadcrumbContainer = styled.nav`
  padding: 20px 0;
  margin-bottom: 20px;
`;

const BreadcrumbList = styled.ol`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.875rem;
`;

const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
  color: #999;
  
  &:last-child {
    color: #FFD700;
    font-weight: 600;
  }
`;

const BreadcrumbLink = styled.a`
  color: #999;
  text-decoration: none;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  
  &:hover {
    color: #DC2626;
  }
`;

const Separator = styled.span`
  margin: 0 10px;
  color: #666;
`;

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <BreadcrumbContainer aria-label="Breadcrumb">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <Home size={16} style={{ marginRight: '5px' }} />
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <Separator>
              <ChevronRight size={16} />
            </Separator>
            <BreadcrumbItem>
              {item.href && index < items.length - 1 ? (
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
              ) : (
                <span>{item.label}</span>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </BreadcrumbContainer>
  );
};

export default Breadcrumbs;

// Example usage in pages:
// <Breadcrumbs items={[
//   { label: 'Menu', href: '/menu' },
//   { label: 'Burgers' }
// ]} />