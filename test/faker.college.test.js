/* eslint-env mocha */
import { assert, expect } from 'chai'
import College from '../lib/model/College'

describe('Faker.College', () => {
    let counter = 0

    it(`(${++counter}) Returns a string`, (done) => {
        assert.isString(College.name())
        assert.isString(College.abbrev())
        assert.isString(College.description())
        assert.isString(College.type())
        assert.isString(College.major())
        assert.isString(College.degree())
        assert.isString(College.email())
        assert.isString(College.phone())
        expect(College.name()).to.be.a('string')
        expect(College.abbrev()).to.be.a('string')
        expect(College.description()).to.be.a('string')
        expect(College.type()).to.be.a('string')
        expect(College.major()).to.be.a('string')
        expect(College.degree()).to.be.a('string')
        expect(College.email()).to.be.a('string')
        expect(College.phone()).to.be.a('string')
        done()
    })

    it(`(${++counter}) Returns a number`, (done) => {
        assert.isNumber(College.founded())
        expect(College.founded()).to.be.a('number')
        done()
    })

    it(`(${++counter}) Returns a literal object`, (done) => {
        assert.isObject(College.address())
        assert.isObject(College.enrolled())
        assert.isObject(College.studentJSON())
        expect(College.address()).to.be.a('object')
        expect(College.enrolled()).to.be.a('object')
        expect(College.studentJSON()).to.be.a('object')
        done()
    })

    it(`(${++counter}) Contains valid values`, (done) => {
        assert.isAbove(College.name().length, 0)
        assert.isAbove(College.abbrev().length, 0)
        assert.isAbove(College.description().length, 0)
        assert.isAbove(College.type().length, 0)
        assert.isAbove(College.founded(), 1849)
        assert.isBelow(College.founded(), 1961)
        assert.isAbove(College.major().length, 0)
        assert.isAbove(College.degree().length, 0)
        assert.isAbove(College.email().length, 0)
        assert.isAbove(College.phone().length, 0)
        assert.isNotEmpty(College.address())
        assert.isNotEmpty(College.enrolled())
        assert.isNotEmpty(College.studentJSON())
        done()
    })

    it(`(${++counter}) Has properties`, (done) => {
        assert.property(College.studentJSON(), 'name')
        assert.property(College.studentJSON(), 'description')
        assert.property(College.studentJSON(), 'founded')
        assert.property(College.studentJSON(), 'type')
        assert.property(College.studentJSON(), 'email')
        assert.property(College.studentJSON(), 'phone')
        assert.property(College.studentJSON(), 'address')
        assert.property(College.studentJSON(), 'dates')
        assert.property(College.studentJSON(), 'degree')
        assert.property(College.studentJSON(), 'major')

        assert.property(College.collegeJSON(), 'name')
        assert.property(College.collegeJSON(), 'description')
        assert.property(College.collegeJSON(), 'founded')
        assert.property(College.collegeJSON(), 'type')
        assert.property(College.collegeJSON(), 'email')
        assert.property(College.collegeJSON(), 'phone')
        assert.property(College.collegeJSON(), 'address')

        assert.property(College.enrolled(), 'startDate')
        assert.property(College.enrolled(), 'endDate')
        assert.property(College.enrolled(), 'gradDate')
        assert.property(College.address(), 'street')
        assert.property(College.address(), 'city')
        assert.property(College.address(), 'state')
        assert.property(College.address(), 'zip')
        assert.property(College.address(), 'locale')
        assert.hasAllKeys(College.studentJSON(), ['name', 'description', 'founded', 'type', 'email', 'phone', 'address', 'dates', 'degree', 'major'])
        assert.hasAllKeys(College.collegeJSON(), ['name', 'description', 'founded', 'type', 'email', 'phone', 'address'])
        assert.hasAllKeys(College.enrolled(), ['startDate', 'endDate', 'gradDate'])
        assert.hasAllKeys(College.address(), ['street', 'city', 'state', 'zip', 'locale'])
        done()
    })

    it(`(${++counter}) Does not throw any errors`, (done) => {
        assert.doesNotThrow(() => College.name(), Error)
        assert.doesNotThrow(() => College.abbrev(), Error)
        assert.doesNotThrow(() => College.description(), Error)
        assert.doesNotThrow(() => College.type(), Error)
        assert.doesNotThrow(() => College.founded(), Error)
        assert.doesNotThrow(() => College.major(), Error)
        assert.doesNotThrow(() => College.degree(), Error)
        assert.doesNotThrow(() => College.phone(), Error)
        assert.doesNotThrow(() => College.enrolled(), Error)
        assert.doesNotThrow(() => College.studentJSON(), Error)
        assert.doesNotThrow(() => College.collegeJSON(), Error)
        done()
    })
})