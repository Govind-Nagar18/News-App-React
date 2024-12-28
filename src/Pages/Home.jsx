import './Home.css';

export default function Home() {
   return (
      <div className="home-container">
        <header className="home-header">
          <h1>Welcome to News.io</h1>
          <p>Your trusted source for the latest news and updates</p>
        </header>
        
        <section className="home-content">
          <h2>Top Stories</h2>
          <p>Stay informed with the most important headlines from around the world.</p>
        </section>
        
        <footer className="home-footer">
          <p>&copy; 2024 News.io - All Rights Reserved</p>
        </footer>
      </div>
  );
}
