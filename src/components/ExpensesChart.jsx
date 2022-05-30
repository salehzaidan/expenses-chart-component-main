import Chart from "./Chart";

function ExpensesChart({ data }) {
  return (
    <div className="flex flex-col gap-4 font-dmsans">
      <div className="grid max-w-md grid-flow-col grid-cols-[auto-auto] grid-rows-2 items-center rounded-lg bg-soft-red p-4 text-white">
        <p className="text-sm text-very-pale-orange">My balance</p>
        <p className="text-xl font-bold">$921.48</p>
        <div className="relative right-2 row-span-2 h-9 w-9 justify-self-end">
          <div className="absolute h-full w-full rounded-full bg-black" />
          <div className="absolute right-1/2 h-full w-full rounded-full border-2 border-white" />
        </div>
      </div>

      <div className="rounded-lg bg-very-pale-orange p-4">
        <p className="text-xl font-bold text-dark-brown">
          Spending - Last {data.length} days
        </p>
        <Chart data={data} />
        <hr className="my-6 h-px bg-cream" />
        <p className="mt-4 text-sm text-medium-brown">Total this month</p>
        <div className="grid grid-flow-col grid-cols-2 grid-rows-[auto_auto] items-center justify-items-end">
          <p className="row-span-2 justify-self-start text-3xl font-bold text-dark-brown md:text-4xl">
            $478.33
          </p>
          <p className="text-sm font-bold">+2.4%</p>
          <p className="text-sm text-medium-brown">from last month</p>
        </div>
      </div>
    </div>
  );
}

export default ExpensesChart;
