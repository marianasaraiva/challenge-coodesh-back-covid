const sinon = require('sinon');
const { expect } = require('chai');

const services = require('../../src/services/case');
const controllers = require('../../src/controllers/case');

const mocks = require('../mocks/caseDate');

describe('Testa a camada Controller /case', () => {
  describe('Testa a função getAllCases', () => {
    const response = {};
    const request = {};
    let next = {};

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(response);
    });

    describe('Requisição realizada com sucesso', () => {
      before(() => {
        sinon.stub(services, 'getAll').resolves(1)
      });

      after(() => {
        services.getAll.restore();
      });

      it('Verifica se retorna status 200', async () => {
        await controllers.getAll(request, response);
        expect(response.status.calledWith(200)).to.be.true;
      });

      it('Verifica se retorna corretamente', async () => {
        await controllers.getAll(request, response);
        expect(response.json.calledWith()).to.be.true;
      });
    });

    describe('Requisição falhou', () => {
      before(() => {
        next = sinon.stub();
        sinon.stub(services, 'getAll')
          .throws();
      });
      after(() => {
        services.getAll.restore();
      });

      it('Verifica se retorna direciona ao middleware de erro', async () => {
        await controllers.getAll(request, response, next);
        expect(next.calledOnce).to.be.true;
      });
    });
  });

  describe('Testa a função getAllCasesDateCount', () => {
    const response = {};
    const request = {};
    let next = {};
    request.params = {
      cases: '2020-02-01',
    }

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(response);
    });

    describe('Requisição realizada com sucesso', () => {
      before(() => {
        sinon.stub(services, 'getAllCasesDateCount').resolves(mocks.allCases);
      });

      after(() => {
        services.getAllCasesDateCount.restore();
      });

      it('Verifica se retorna status 200', async () => {
        await controllers.getAllCasesDateCount(request, response);
        expect(response.status.calledWith(200)).to.be.true;
      });

      it('Verifica se retorna casos de covid', async () => {
        await controllers.getAllCasesDateCount(request, response);
        expect(response.json.calledWith(mocks.allCases)).to.be.true;
      });
    });

    describe('Requisição falhou', () => {
      before(() => {
        next = sinon.stub();
        sinon.stub(services, 'getAllCasesDateCount')
          .throws();
      });
      after(() => {
        services.getAllCasesDateCount.restore();
      });

      it('Verifica se retorna direciona ao middleware de erro', async () => {
        await controllers.getAllCasesDateCount(request, response, next);
        expect(next.calledOnce).to.be.true;
      });
    });
  });

  describe('Testa a função getAllCasesDateCumulative', () => {
    const response = {};
    const request = {};
    let next = {};
    request.params = {
      cases: '2020-02-01',
    }

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(response);
    });

    describe('Requisição realizada com sucesso', () => {
      before(() => {
        sinon.stub(services, 'getAllCasesDateCumulative').resolves(mocks.allCasesCumulative);
      });

      after(() => {
        services.getAllCasesDateCumulative.restore();
      });

      it('Verifica se retorna status 200', async () => {
        await controllers.getAllCasesDateCumulative(request, response);
        expect(response.status.calledWith(200)).to.be.true;
      });

      it('Verifica se retorna casos de covid', async () => {
        await controllers.getAllCasesDateCumulative(request, response);
        expect(response.json.calledWith(mocks.allCasesCumulative)).to.be.true;
      });
    });

    describe('Requisição falhou', () => {
      before(() => {
        next = sinon.stub();
        sinon.stub(services, 'getAllCasesDateCumulative')
          .throws();
      });
      after(() => {
        services.getAllCasesDateCumulative.restore();
      });

      it('Verifica se retorna direciona ao middleware de erro', async () => {
        await controllers.getAllCasesDateCumulative(request, response, next);
        expect(next.calledOnce).to.be.true;
      });
    });
  });
});