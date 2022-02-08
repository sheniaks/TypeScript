interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string;
  }
  
  let icecream: Sundae = {
    flavor: "vanilla",
    scoops: 5,
    sauce: 'caramel',
    nuts: true,
  }
  
  console.log(icecream.scoops);
  console.log(icecream.flavor);
  
  function tooManyScoops(res: Sundae) {
    if (res.scoops >= 4) {
      return res.scoops + ' is too many scoops!';
    } else {
      return 'Your order will be ready soon!';
    }
  }
  
  console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5, sauce: 'caramel'}));
  
  interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: string;
  }
  
  