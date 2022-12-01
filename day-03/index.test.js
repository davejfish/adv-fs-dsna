const { BinaryTreeNode, PersonTreeNode } = require('./index');

describe('node based data structures', () => {

  it('binary tree node add', () => {
    const B = new BinaryTreeNode('B');
    const A = new BinaryTreeNode('A');
    const C = new BinaryTreeNode('C');
    const D = new BinaryTreeNode('D');

    B.add(A);
    B.add(D);
    B.add(C);

    expect(B).toEqual({
      value: 'B',
      left: { value: 'A', left: null, right: null },
      right: {
        value: 'D',
        left: { value: 'C', left: null, right: null },
        right: null
      }
    });
  });

  it('Person tree node find', () => {
    const bill = {
      name: 'bill',
      person: {
        name: 'bill',
        phone: 8675309,
        address: '123 street'
      }
    };
    const sam = {
      name: 'sam',
      person: {
        name: 'sam',
        phone: 8675309,
        address: '123 street'
      }
    };
    const ted = {
      name: 'ted',
      person: {
        name: 'ted',
        phone: 8675309,
        address: '123 street'
      }
    };
    const hank = {
      name: 'hank',
      person: {
        name: 'hank',
        phone: 8675309,
        address: '123 street'
      }
    };

    const Bill = new PersonTreeNode(bill);
    const Sam = new PersonTreeNode(sam);
    const Ted = new PersonTreeNode(ted);
    const Hank = new PersonTreeNode(hank);

    Sam.add(Bill);
    Sam.add(Ted);
    Sam.add(Hank);

    const result = Sam.findPerson('hank');

    expect(result).toEqual({
      name: 'hank',
      phone: 8675309,
      address: '123 street'
    });
  });

});
