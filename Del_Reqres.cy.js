describe('Get Reqres' , () => {
    it('Validar excluir retornando 204', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2'
        }).then((response) => {
            expect(response.status).to.eq(204)
           
        })
    })
})