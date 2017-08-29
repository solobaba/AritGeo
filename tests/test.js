const expect = require('chai').expect;
const aritGeo = require('../lib/aritGeo').aritGeo;

  describe("Case for the sequence of an array of numbers: ", function() {

    describe("Case for a data type that is not an array", function() {

      it("should return false for a parameter that is not an array", function() {
        expect(aritGeo(![])).to.be.equal(false);
      });
    });

    it("should return -1 for an array that is neither Arithmetic nor Geometric", function() {
        expect(aritGeo([-5, 20, -3, 16])).to.be.equal(-1);
      });
    });

    describe("Case for an arithmetic sequence", function() {

      it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function() {
        expect(aritGeo([2, 4, 6, 8, 10])).to.be.equal('Arithmetic');
      });

       it("should return `Arithmetic` for [0.2, 0.4, 0.6, 0.8]", function() {
        expect(aritGeo([2.2, 4.2, 6.2, 8.2])).to.be.equal('Arithmetic');
      }); 

      it("should return `Arithmetic` for [5, 11, 17, 23, 29]", function() {
        expect(aritGeo([5, 11, 17, 23, 29])).to.be.equal('Arithmetic');
      }); 

       it("should return `Arithmetic` for [-5, -11, -17, -23, -29]", function() {
        expect(aritGeo([-5, -11, -17, -23, -29])).to.be.equal('Arithmetic');
      });   
    });
  // });

  describe("Case for a geometric sequence", function() {

      it("should return `Geometric` for [2, 6, 18, 54, 162]", function() {
        expect(aritGeo([2, 6, 18, 54, 162])).to.be.equal('Geometric');
      });

      it("should return `Geometric` for [-2, -6, -18, -54, -162]", function() {
        expect(aritGeo([-2, -6, -18, -54, -162])).to.be.equal('Geometric');
      });

      it("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", function() {
        expect(aritGeo([0.5, 3.5, 24.5, 171.5])).to.be.equal('Geometric');
      });

      it("should return `Geometric` for [−128, 64, −32, 16, −8]", function() {
        expect(aritGeo([-128, 64, -32, 16, -8])).to.be.equal('Geometric');
      });
    });

