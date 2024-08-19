import { Instagram } from "lucide-react"
import { Twitter } from "lucide-react"
import { Mail } from "lucide-react"
import { Send } from "lucide-react"


const ContactPage = () => {
  return (
    <>
  <div className="grid grid-cols-2 gap-10">
    <div className="space-y-10">
    <h1 className="text-5x font-bold">Kontak saya</h1>
     <p>Berikut ini adalah kontak saya. Silahkan dilihat sapa tau tertarik</p>

     <div>
        <button className="btn">
            <Mail size={20} />
            <span>oswaldmogot235@gmail.com</span>
        </button>
        <button className="btn">
            <Instagram size={20} />
            <span>oswaldmogot</span>
        </button>
        <button className="btn">
            <Twitter size={20} />
            <span>MogotOswald</span>
        </button>
     </div>
    </div>
  </div>
  <div className="card bg-base-200">
    <div className="card-body">
    <h3 className="card-title">Kontak Saya</h3>
        <input type="text" className="input w-full" placeholder="Nama dan email sampean" />
        <textarea type="text" className="textarea" placeholder="pertanyaan Atau diskusi tapi kalo boleh duit" rows={5}></textarea>

        <div className="card-actions">
            <button className="btn btn-primary">
                <Send size={20} />
                <span>Kirim Pertanyaan atau duit</span>
            </button>
        </div>
    </div>
  </div>
    </>
  )
}

export default ContactPage