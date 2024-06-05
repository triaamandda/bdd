const URL = 'http://zero.webappsecurity.com/index.html';

class HomePage {
    static visit() {
        cy.visit(URL);
    }

    static fillSearchTerm() {
        cy.get('#searchTerm').click();
    }

    static fillOnline() {
        cy.get('#searchTerm').type('online{enter}');
    }
}

export default HomePage;