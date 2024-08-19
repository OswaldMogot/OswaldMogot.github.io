
const ProfilePage = () => {
  return (
    <>
    <div className="flex gap-10">
        <div className="flex-1 space-y-10">
    <h1 className="text-5x font-bold">Hallo</h1>
    <p> Saya Oswald, seorang developer web yang sedang mencoba menguasai Dunia media dan internet.</p>
    </div>
    <div className="flex-none">
        <div className="avatar">
            <div className="avatar">
                <div className="w-48 rounded-lg"><img src="foto.jpeg" alt="" /></div>
            </div>
        </div>
    </div>
</div>

 <div className="grid grid-cols-2 gap-10">
    <div className="card bg-base-200">
        <div className="card-body col-2 gap-10">
            <h3 className="card-title">Frontend Developer</h3>
            <p>Walau dengan design yang masih pemula dan masih belum layak disebut frontend developer.</p>
        </div>
    </div>
 </div>
 <div className="grid grid-cols-2 gap-10">
    <div className="card bg-base-200">
        <div className="card-body col-2 gap-10">
            <h3 className="card-title">Backend Developer</h3>
            <p>Wah apa lagi ini saya masih merasa kesulitan dan sangat jauh dari sebutan Backend Developer.</p>
        </div>
    </div>
 </div>
</>
  )
}

export default ProfilePage