export default function GetAWebsite() {

  type PricesTypes = {
    _id: number,
    packName: string,
    packFeatures: [],
    packEmojie: string
  }

  const Prices: PricesTypes = [
    {
      _id: 2,
    packName: "testPack",
    packFeatures: ["one", "two", "three"],
    packEmojie: "emojie"
    }
  ]

  return (
  <div className="flex h-screen flex-col p-8">
      <div className="bg-primary text-primary z-50 text-center fixed top-0 left-0 right-0">jhkhskhkhk</div>
      <div className="bg-black/30 backdrop-blur-xl m-8 mt-6 rounded-xl h-80 flex justify-center items-center text-white fixed top-0 left-0 right-0">
        one
      </div>
      <div className="text-white flex justify-center items-center flex-col gap-4">
        <div className="h-[40vh] w-20"></div>

        <div className="w-full flex justify-center gap-4">
          <h1 className="font-bold text-white w-full text-2xl">Our prices</h1>

          {
            Prices.map(p => (
            <div>{p.packName}</div>
            ))
          }
        </div>

      </div>
    </div>
  );
}
