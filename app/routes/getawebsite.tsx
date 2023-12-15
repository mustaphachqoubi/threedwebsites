import emojieOne from '../../public/laptop.gif'
import emojieTwo from '../../public/cyborg.gif'
import emojieThree from '../../public/robot.gif'

export default function GetAWebsite() {

  const Packages = [
    {
      _id: 2,
      packName: "testPack",
      packFeatures: ["one", "two", "three"],
      packEmojie: emojieOne,
    },
    {
      _id: 2,
      packName: "testPack",
      packFeatures: ["one", "two", "three"],
      packEmojie: emojieTwo 
    },
    {
      _id: 2,
      packName: "testPack",
      packFeatures: ["one", "two", "three"],
      packEmojie: emojieThree
    },
  ];

  return (
    <div className="flex h-screen flex-col p-8">
      <div className="bg-primary text-primary z-50 text-center fixed top-0 left-0 right-0">
        jhkhskhkhk
      </div>
      <div className="bg-black/30 backdrop-blur-xl m-8 mt-6 z-50 rounded-xl h-80 flex justify-center items-center text-white fixed top-0 left-0 right-0">
        one
      </div>
      <div className="text-white flex justify-center items-center flex-col gap-4">
        <div className="h-[40vh] w-20"></div>

        <div className="w-full flex justify-center gap-4">
          <h1 className="font-bold text-white w-full text-2xl">Our packages</h1>
        </div>

          <div className="w-full flex flex-col z-10 md:flex-row gap-6 justify-center items-center">
        {Packages.map((pack: any) => (
            <div className="relative bg-white text-black p-4 rounded-lg w-60 h-96 ">
              <div className="bg-primary absolute -top-[10px] -right-[10px] rounded-full w-20 h-20 
                text-white flex justify-center items-center">
                  <img className='border-2 border-hidden w-14 rounded-full' src={pack.packEmojie}/>
              </div>
              {pack.packName}
            </div>
        ))}
          </div>
      </div>
    </div>
  );
}
