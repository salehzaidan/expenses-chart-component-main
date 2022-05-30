import Bar from "./Bar";

function Chart({ data }) {
  const maxAmount = data.reduce((prev, acc) => Math.max(prev, acc.amount), 0);
  return (
    <div className="mt-16 grid grid-flow-col grid-cols-7 grid-rows-[10rem_auto] items-end gap-3 md:grid-rows-[7rem_auto]">
      {data.map((item, index) => {
        return (
          <Bar
            label={item.day}
            amount={item.amount}
            maxAmount={maxAmount}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Chart;
