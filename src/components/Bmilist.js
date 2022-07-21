
function Bmilist({range,bmi}) {
  console.log(range)
  return (
    <div class="col-md-8">
    
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">type</th>
      <th scope="col">bmi</th>
      <th scope="col">weight</th>
    </tr>
  </thead>
  <tbody>
    <tr className={bmi<18.5 ? "border border-danger":"" }>
      <th scope="row">1</th>
      <td>under weight</td>
      <td>18.5</td>
      <td>{range.underweight.low}</td>
    </tr>
    <tr className={18.5<bmi && bmi < 24.9 ? "border border-danger":"" }>
      <th scope="row">2</th>
      <td>Normal</td>
      <td>18.5-24.9</td>
      <td>{range.normal.low+"kg -"+range.normal.high}-</td>
    </tr>

    <tr className={24.9<bmi && bmi < 29.9 ? "border border-danger":"" }>
      <th scope="row">2</th>
      <td>over wight</td>
      <td>24.9-29.9</td>
      <td>{range.overweight.low+"kg -"+range.overweight.high}</td>
    </tr>

    <tr className={29.9<bmi && bmi < 34.9 ? "border border-danger":"" }>
      <th scope="row">2</th>
      <td>obisity class 1</td>
      <td>29.9-34.9</td>
      <td>{range.obesityone.low+"kg -"+range.obesityone.high}</td>
    </tr>

    <tr className={34.9<bmi && bmi < 39.9 ? "border border-danger":"" }>
      <th scope="row">2</th>
      <td>obisity class 2</td>
      <td>34.9-39.9</td>
      <td>{range.obesitytwo.low+"kg -"+range.obesitytwo.high}</td>
    </tr>
    
    <tr className={ bmi < 39.9 ? "border border-danger":"" }>
      <th scope="row">2</th>
      <td>obisity class 3</td>
      <td>39.9</td>
      <td>{range.obesitythree.high}</td>
    </tr>

  
  </tbody>
</table>
      </div>
  
  )
}

export default Bmilist