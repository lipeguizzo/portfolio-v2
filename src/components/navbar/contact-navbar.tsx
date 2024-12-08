import { contactLinks } from '@/data/contact.data';
import Link from 'next/link';
import { Container } from '../containers';

export function ContactNavbar() {
  return (
    <Container className="gap-5">
      {contactLinks.map((link) => (
        <Link key={link.href} href={link.href} legacyBehavior passHref>
          <a target="_blank" className="duration-300 hover:-translate-y-[4px]">
            {link.icon}
          </a>
        </Link>
      ))}
    </Container>
  );
}
