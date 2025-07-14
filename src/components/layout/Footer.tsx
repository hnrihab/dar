// import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className=" border-t" style={{ backgroundColor: 'rgba(128, 58, 42, 0.8)' }}>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <Home className="h-6 w-6 text-primary" /> */}
              <img src="src/images/logoblck.png" alt="error" className="w-[60px] object-contain" />
              <span className="text-xl font-semibold">MaisonLoc</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Trouvez la maison de vos rêves parmi notre sélection de locations.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-sm text-muted-foreground hover:text-primary">
                  Recherche
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary">
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">
                  Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Email: contact@maisonloc.fr
              </li>
              <li className="text-sm text-muted-foreground">
                Tél: +33 1 23 45 67 89
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} MaisonLoc. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}