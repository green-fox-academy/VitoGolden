import React from 'react';
import Button from './Button';
import Display from './Display';


// function GoldenAcorn(props) {
//   // const { name } = props;
//   // let count = 0;
//   let { count } = props;
//   const increase = (e) => {
//     count = e.target.type;
//     console.log(count);
//   };
//   console.log(count);
//   return (
//     <React.Fragment>
//       <div>
//         <Button name="buy it" plus={increase} />
//         <Display count={count} />
//         <Button name="eat it" />
//       </div>
//     </React.Fragment>
//   );
// }
// GoldenAcorn.defaultProps = {
//   count: '',
// };
class GoldenAcorn extends React.Component {   //eslint-disable-line
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    // let count = 0;
    // this.increase = () => {
    //   count += 1;
    // };
  }

  increase() {
    const { count } = this.state;
    this.setState({ count: (count) + 1 });
  }

  decrease() {
    const { count } = this.state;
    if (count !== 0) {
      this.setState({ count: count - 1 });
    }
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <Button name="buy it" plus={this.increase} />
        <Display count={count} />
        <Button name="eat it" plus={this.decrease} />
      </div>
    );
  }
}
// GoldenAcorn.propTypes = {
// count: PropTypes.number.isRequired,
// increase: PropTypes.func.isRequired,
// };

export default GoldenAcorn;
// function goldenAcorn(props) {
//   // goldenAcorn.onClick = () => {
//   //   props.nuts += 1;
//   // };
//   return (
//     <main>
//       <button type="button">but one</button>
//       <p>{props.nuts}</p>
//       <button type="button" onClick={goldenAcorn.onClick}>eat one</button>
//     </main>
//   );
// }
// class goldenAcorn extends React.Component {    //eslint-disable-line

// }

// function goldenAcorn(props) {
//   return (
//     <h1>
//       Hello
//       {props.name}
//       !
//     </h1>);
// }

// const element = <goldenAcorn name="Runoob" />;

// ReactDOM.render(
//   element,
//   document.querySelector('.main'),
// // );
// ReactDOM.render(
//   <goldenAcorn nuts="0" />,
//   document.querySelector('main'),
// );

// var HelloMessage = React.createClass({
//   render: function() {
//     return <h1>Hello {this.props.name}</h1>;
//   }
// });

// ReactDOM.render(
//   <HelloMessage name="John" />,
//   document.getElementById('example')
// );
