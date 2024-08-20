describe('Post Reqres' , () => {
    it('Validar criar retornando 200', () => {

        const dados = {
            "nome":  "morpheus" ,
            "emprego":  "líder" 
       }
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: dados,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)

        })
})

it('Validar retorno body, atualizar retornando 200', () => {

    const dados = {
        "nome":  "morpheus" ,
        "emprego":  "residente de zion" 
   }
    cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users/2',
        body: dados,
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(200)
        let retorno = response.body
        cy.log(JSON.stringify(retorno, null, 2))
       
    })

})

it('Validar atualizar retornando 200', () => {

    const dados = {
        "nome":  "morpheus" ,
        "emprego":  "residente de zion" 
   }
    cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users/2',
        body: dados,
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(200)
       
    })

})

it('Validar atualizar retornando 200', () => {

    const dados = {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    }
    cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/register',
        body: dados,
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(200)
        let retorno = response.body
        cy.log(JSON.stringify(retorno, null, 2))
        expect(retorno.token).to.eq( "QpwL5tke4Pnpja7X4")
 
    })

})

it('Validar registro sem sucesso retornando 400', () => {

    const dados = {
        "email": "sydney@fife"
    }
    cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/register',
        body: dados,
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(400)
        let retorno = response.body
        cy.log(JSON.stringify(retorno, null, 2))
        expect(retorno.error).to.eq( "Missing password")
 
    })

})

it('Validar login com sucesso retornando 200', () => {

    const dados = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }
    cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/login',
        body: dados,
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(200)
        let retorno = response.body
        cy.log(JSON.stringify(retorno, null, 2))
        expect(retorno.token).to.eq( "QpwL5tke4Pnpja7X4")
 
    })

})

it('Validar login sem sucesso retornando 400', () => {

    const dados ={
        "email": "peter@klaven"
    }
    cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/login',
        body: dados,
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(400)
        let retorno = response.body
        cy.log(JSON.stringify(retorno, null, 2))
        expect(retorno.error).to.eq( "Missing password")
 
    })

})



})








