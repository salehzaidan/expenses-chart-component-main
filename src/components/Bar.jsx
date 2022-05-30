function Bar({ label, amount, maxAmount }) {
  const height = Math.round((amount / maxAmount) * 100);
  return (
    <>
      <div className="group relative" style={{ height: `${height}%` }}>
        <div className="absolute left-1/2 -top-8 hidden -translate-x-1/2 rounded bg-dark-brown px-1 py-0.5 text-center text-sm text-white group-hover:block">
          ${amount}
        </div>
        <div
          className={`h-full w-8 rounded ${
            height === 100 ? "bg-cyan" : "bg-soft-red"
          } hover:opacity-70`}
        />
      </div>
      <p className="text-center text-sm text-medium-brown">{label}</p>
    </>
  );
}

export default Bar;
