
/*
 *  Solution 1: Cache is only preserved for each computation
 */

class Solution1 extends React.Component {
  constructor() {
    super();
    this.state = { fib: 'NA' };
  }
  
  update(e) {
    this.setState({ fib: this.fib(e.target.value, {}) });
  }
  
  fib(num, cache) {
    if (isNaN(parseInt(num))) {
      return 'NA';
    } else if (num <= 1) {
      return num;
    } else if (cache[num] > 0) {
      return cache[num];
    } else {
      cache[num] = this.fib(num - 1, cache) + this.fib(num - 2, cache);
      return cache[num];
    }
  }
  
  render () {
    return (
      <p>
        Solution 1: Cache is only preserved for each computation
        <br />
        F(<input onChange={ e => this.update(e) }></input>) is { this.state.fib }
      </p>
    )
  }
}

/*
 *  Solution 2: Cache is persisted within component state
 */

class Solution2 extends React.Component {
  constructor() {
    super();
    this.state = { fib: 'NA', cache: {} };
  }
  
  update(e) {
    let num = e.target.value;
    
    if (isNaN(parseInt(num))) {
      this.setState({ fib: 'NA' });
    } else {
      let { fib, cache } = this.calcAndStoreFib(num, this.state.cache);
      
      this.setState({ 
        fib: fib,
        cache: cache
      });
    }
  }
  
  calcAndStoreFib(num, cache) {
    if (num <= 1) {
      return { fib: num, cache: cache };
    } else if (cache[num] > 0) {
      return { fib: cache[num], cache: cache };
    } else {
      cache[num] = this.calcAndStoreFib(num - 1, cache).fib + this.calcAndStoreFib(num - 2, cache).fib;
      
      return {
        fib: cache[num],
        cache: cache
      };
    }
  }
  
  render () {
    return (
      <p>
        Solution 2: Cache is persisted within component state
        <br />
        F(<input onChange={ e => this.update(e) }></input>) is { this.state.fib }
      </p>
    )
  }
}

/*
 *  Stateless component as wrapper
 */
 
const MyClass = () => {
  return (
    <div>
      <h1>Fibonacci Sequence</h1>
      <Solution1 />
      <Solution2 />
    </div>
  )
}

ReactDOM.render(<MyClass />, document.getElementById('root'))