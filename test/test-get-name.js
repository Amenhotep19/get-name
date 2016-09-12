import { expect } from 'chai';
import getName from '../src/get-name';

describe('get-name', () => {
    it('should identify null', () => {
        expect(getName(null)).to.equal('null');
    });

    it('should identify undefined', () => {
        expect(getName(undefined)).to.equal('undefined');
    });

    it('should return the name of a named function', () => {
        function foo() {}
        const bar = function() {}; // eslint-disable-line func-names
        const obj = {baz() {}};
        expect(getName(foo)).to.equal('foo');
        expect(getName(bar)).to.equal('bar');
        expect(getName(obj.baz)).to.equal('baz');
    });

    it('should return the name of an instance\'s constructor function', () => {
        function Foo() {}
        const foo = new Foo();
        expect(getName(foo)).to.equal('Foo');
    });
});
