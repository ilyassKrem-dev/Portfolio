
import Bottom from "./sub-comp/Contact-sub/Bottom";
import Form from "./sub-comp/Contact-sub/Form";
function Contact() {


    return (
        <>
            <section className="skills-section h-full ">
                <div className="flex justify-center items-center flex-col mt-16">                     
                    <div className="skills-box p-4 px-12 md:px-16  ">
                            <h1 className="">CONTACT</h1>
                    </div>
                    
                    <p className="mt-20 text-base font-['Open_Sans']w-30 text-center sm:w-full">Contact me by filling out the form below :</p>
                    <div className="line my-8"></div>

                    <Form />
                    <Bottom />

                    
                </div> 
        </section>
        
        
        </>
    )
}

export default Contact