function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
        <p className="footer-name">John Jerick Agapito</p>

        <p>Built with React and Vite.</p>

        <p>© {currentYear} All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer