describe('Get Reqres' , () => {
    it('Validar body List Users retornando 200', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        }).then((response) => {
            expect(response.status).to.eq(200)
            let retorno = response.body
            cy.log(JSON.stringify(retorno, null, 2))

        })
    })

    it('Validar usuário único retornando 200', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/2'
        }).then((response) => {
            expect(response.status).to.eq(200)
        
        })
    })

    it('Validar usuário único retornando 404', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/23',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404)
        
        })
    })

    it('Validar lista usuário não existente retornando 200', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown3',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)
        
        })
    })

    it('Validar usuário não existente retornando 200', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown/2',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)
        
        })
    })

    it('Validar usuário não encontrado retornando 404', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown/2',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404)
           
        })
    })

    it('Validar resposta atrasada retornando 200', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?delay=3',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)
           
        })
    })
}) 
   