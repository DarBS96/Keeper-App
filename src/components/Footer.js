function footer() {
    const date = new Date();
    const year = date.getFullYear();
    return <footer>
        <p className="footer"> © Copyright {year}</p>
    </footer>;
}

export default footer;