process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();

const indexController = require('../../src/server/controllers/index');

describe('controllers : index', () => {

  describe('sum()', () => {
    it('should return a total', (done) => {
      indexController.sum(1, 2, 3, (err, total) => {
        should.not.exist(err);
        total.should.eql(6);
        done();
      });
    });
    it('should return an error', (done) => {
      indexController.sum(1, 'test', 3, (err, total) => {
        should.not.exist(total);
        err.should.eql('Something went wrong!');
        done();
      });
    });
  });

});
