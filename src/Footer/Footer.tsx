
import './Footer.css'


const Footer: React.FC = () => {
  
  return (
    <footer>
      <nav>
        <ul>
          <li><a href="/legal">Legal Notice</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li>
            <a
              href="https://cyber.gouv.fr/bonnes-pratiques-protegez-vous"
              target="_blank"
              rel="noopener noreferrer"
            >
              *ANSSI Best Practices
            </a>
          </li>
        </ul>
      </nav>
      <p>{new Date().getFullYear()} HaveIBeenRocked</p>
    </footer>
  );
};

export default Footer
