const Adoption = artifacts.require('Adoption');

contract("Adoption", (accounts) => {
    let adoption;
    let expectedAdopter;

    before(async () => {
        adoption = await Adoption.deployed();
    });

    describe("adopting a pet and retriving account address", async() => {
        before("adopt a pet using account[0]", async () => {
            await adoption.adopt(8, {from : accounts[0]});
            expectedAdopter = accounts[0];
        });

        it("can fetch the address of the owner by pet id", async () => {
            const adopter = await adoption.adopters(8);
            assert.equal(adopter, expectedAdopter, "The owner of the adopted pet should be the first account.");
        });

        it("can fetch the address of all pet owners addresses", async () => {
            const adopters = await adoption.getAdopter();
            assert.equal(adopters[8], expectedAdopter, "The owner of the adopted pet should be in the collection.");
        });
    });
});