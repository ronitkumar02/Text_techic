import ChatBot from "./ChatBot";
import NavBar from "./NavBar";

const ClauseLibrary = () => {
    return (
        <div style={{backgroundColor: "#eaf3f8"}}>
        <NavBar/>
        <div style={{height: "20px"}}></div>
        <div className="container">
        <center>
        <h1>Find relevant clauses</h1>
        </center>
        <div style={{height: "20px"}}></div>
        <div class="dropdown" style={{float: "right",width: "30%"}}>
            <div class="btn btn-secondary dropdown-toggle" style={{width: "100%"}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sections
            </div>

            <ul class="dropdown-menu" style={{width: "100%"}}>
                <li><a class="dropdown-item" href="#General">General</a></li>
                <li><a class="dropdown-item" href="#Intellectual property">Intellectual property</a></li>
                <li><a class="dropdown-item" href="#Duties and obligations">Duties and obligations</a></li>
                <li><a class="dropdown-item" href="#Warranties and liability">Warranties and liability</a></li>
                <li><a class="dropdown-item" href="#Data protection">Data protection</a></li>
                <li><a class="dropdown-item" href="#User-generated content">User-generated content</a></li>
            </ul>
            </div>
        <div style={{height: "20px"}}></div>
        <h3 id="#General">General</h3>
        <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse1" aria-expanded="true" aria-controls="panelsStayOpen-collapse1">
                    Can either party assign any of its rights and obligation?
                </button>
                </h2>
                <div id="panelsStayOpen-collapse1" class="accordion-collapse collapse show">
                <div class="accordion-body">
                    <strong>Both parties agree not to change the terms of the agreement</strong><br/> Neither party shall assign, transfer, mortgage, charge, subcontract, declare a trust over or deal in any other manner with any of its rights and obligations under this Agreement.
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse2" aria-expanded="false" aria-controls="panelsStayOpen-collapse2">
                    Can rights or obligations be assigned or subcontracted to third party?
                </button>
                </h2>
                <div id="panelsStayOpen-collapse2" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <strong>No assignment or transfer </strong><br/>You shall not assign, transfer, mortgage, charge, subcontract, declare a trust over or deal in any other manner with any of your rights and obligations under this Agreement
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse3" aria-expanded="false" aria-controls="panelsStayOpen-collapse3">
                    Can the deeds be executed in counterparts?
                </button>
                </h2>
                <div id="panelsStayOpen-collapse3" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <strong>Agreement, binding, multiple copies </strong><br/>This Deed may be executed in counterparts, each of which shall be deemed to be an original but all of which together shall constitute a single instrument.
                </div>
                </div>
            </div>
            </div>
            <div style={{height: "20px"}}></div>
        <h3 id="Intellectual property">Intellectual property</h3>
        <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse4" aria-expanded="false" aria-controls="panelsStayOpen-collapse4">
                    Can the university and company separately commercially exploit jointly owned asrising intellectual propert?
                </button>
                </h2>
                <div id="panelsStayOpen-collapse4" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <strong>If the Company doesn't exercise its option, the University and Company can exploit Arising Intellectual Property without each other's permission </strong><br/>In the event that the Company does not exercise its option pursuant to Clause 4.7.1,  the University and the Company may themselves separately commercially exploit or non-exclusively sub-license jointly owned Arising Intellectual Property to third parties without the other joint owner’s consent.  
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse5" aria-expanded="false" aria-controls="panelsStayOpen-collapse5">
                    Do the parties grant licence for the other party to use its background intellectual property?
                </button>
                </h2>
                <div id="panelsStayOpen-collapse5" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <strong>Licensing agreement for project </strong><br/>Each Party grants the other Parties a royalty-free, non-transferable, non-exclusive,  licence to use its Background Intellectual Property for the sole purpose of  the performance of the Project.
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse6" aria-expanded="false" aria-controls="panelsStayOpen-collapse6">
                    Does the company grant the university and student arising intellectual propert rights?
                </button>
                </h2>
                <div id="panelsStayOpen-collapse6" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <strong>Licence to use Arising Intellectual Property </strong><br/>The Company hereby grants to the University and the Student a royalty-free irrevocable, non-transferable, non-exclusive licence to use  its Arising Intellectual Property for their own non-commercial activities such as teaching  and  scientific or clinical research.
                </div>
                </div>
            </div>
            </div>
            <div style={{height: "20px"}}></div>
        <h3 id="Duties and obligations">Duties and obligations</h3>
        <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse7" aria-expanded="false" aria-controls="panelsStayOpen-collapse7">
                    When should the consultant be available?
                </button>
                </h2>
                <div id="panelsStayOpen-collapse7" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <strong>Consultant availability and responsiveness </strong><br/>The Consultant shall use reasonable endeavours to ensure that they are available at all times on reasonable notice to provide such assistance or information as the Client may require.
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse8" aria-expanded="false" aria-controls="panelsStayOpen-collapse8">
                    What should the consultant do in case of illness or injury?
                </button>
                </h2>
                <div id="panelsStayOpen-collapse8" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <strong>Consultant's illness/injury: no fee </strong><br/>If the Consultant is unable to provide the Services due to illness or injury, they shall advise the Client of that fact as soon as reasonably practicable. For the avoidance of doubt, no fee shall be payable in accordance with clause 4 in respect of any period during which the Services are not provided.
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse8" aria-expanded="false" aria-controls="panelsStayOpen-collapse8">
                    Should the consultant offer business opportunities to the client?
                </button>
                </h2>
                <div id="panelsStayOpen-collapse9" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <strong>Consultant to offer business opportunities to client first,unless doing so would violate confidentiality or fiduciary duty</strong><br/>The Consultant undertakes to the Client that during the Engagement they shall take all reasonable steps to offer (or cause to be offered) to the Client any Business Opportunities as soon as practicable after the same shall have come to their knowledge and in any event before the same shall have been offered by the Consultant (or caused by the Consultant to be offered) to any other party provided that nothing in this clause shall require the Consultant to disclose any Business Opportunities to the Client if to do so would result in a breach by the Consultant of any obligation of confidentiality or of any fiduciary duty owed by the Consultant to any third party.
                </div>
                </div>
            </div>
            </div>
            <div style={{height: "20px"}}></div>
        <h3 id="Warranties and liability">Warranties and liability</h3>
        <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse10" aria-expanded="false" aria-controls="panelsStayOpen-collapse10">
                   Are the undertakings and warranties in lieu of all other warranties?
                </button>
                </h2>
                <div id="panelsStayOpen-collapse10" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <strong>The parties disclaim all implied warranties</strong><br/>The express undertakings and warranties given by the parties in this Assignment are in lieu of all other warranties, conditions, terms, undertakings and obligations, whether express or implied by statute, common law, custom, trade usage, course of dealing or in any other way.  All of these are excluded to the fullest extent permitted by law.

                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse11" aria-expanded="false" aria-controls="panelsStayOpen-collapse11">
                   Has either party relied on warranty not set out in this agreement?
                </button>
                </h2>
                <div id="panelsStayOpen-collapse11" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <strong>The parties agree that they only rely on the warranties expressly set out in this agreement and waive any other claims</strong><br/>Each of the parties acknowledges that, in entering into this Agreement, it has not relied on any warranty, representation or undertaking except those expressly set out in this Agreement and each party waives any claim for breach of any representation (unless made fraudulently) which is not specifically contained in this Agreement as a warranty.

                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse12" aria-expanded="false" aria-controls="panelsStayOpen-collapse12">
                   To what extent will the indemnity in this clause apply? 
                </button>
                </h2>
                <div id="panelsStayOpen-collapse12" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <strong>Indemnity not given for: -negligence -deliberate breach of agreement -breach of confidence</strong><br/>The indemnity in this clause will not apply to the extent that the claim arises as a result of the Indemnified Party's negligence, the deliberate breach of any agreement between the University and the Assignee, or any breach of confidence.

                </div>
                </div>
            </div>
            </div>
            <div style={{height: "20px"}}></div>
        <h3 id="Data protection">Data protection</h3>
        <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse13" aria-expanded="false" aria-controls="panelsStayOpen-collapse13">
                    How will personal data be processed?
                </button>
                </h2>
                <div id="panelsStayOpen-collapse13" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <strong>Personal data processing</strong><br/>You consent to the Company holding and processing data relating to you for legal, personnel, administrative and management purposes and in particular to the processing of any "sensitive personal data" as defined in the Data Protection Act 1998 relating to you as appropriate (such as information about your physical or mental health or condition in order to take decisions as to your fitness for work, your racial or ethnic origin or religious or similar beliefs in order to monitor compliance with equal opportunities legislation or information relating to any criminal proceedings in which you have been involved for insurance purposes and in order to comply with legal requirements).
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse14" aria-expanded="false" aria-controls="panelsStayOpen-collapse14">
                    How will the company collect information relating to employee?
                </button>
                </h2>
                <div id="panelsStayOpen-collapse14" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <strong>The Company will collect and process information relating to the Employee in accordance with the Company’s privacy notice </strong><br/>The Company will collect and process information relating to the Employee in accordance with the Company’s privacy notice.
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse15" aria-expanded="false" aria-controls="panelsStayOpen-collapse15">
                   Should the parties comply with Data Protection Legislation?
                </button>
                </h2>
                <div id="panelsStayOpen-collapse15" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <strong>Comply with Data Protection Legislation</strong><br/>Each party shall at all times during the term of this agreement, comply with the Data Protection Legislation, and to the extent applicable under the Data Protection Legislation, obtain and maintain all appropriate registrations required in order to allow that party to perform its obligations under this agreement.
                </div>
                </div>
            </div>
            </div>
            <div style={{height: "20px"}}></div>
        <h3 id="User-generated content">User-generated content</h3>
        <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse18" aria-expanded="false" aria-controls="panelsStayOpen-collapse18">
                    Can a user's identity be disclosed to a third party?
                </button>
                </h2>
                <div id="panelsStayOpen-collapse18" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <strong>Disclose identity to third party </strong><br/>We also have the right to disclose your identity to any regulator or third party who is claiming that any content posted or uploaded by you to our Site constitutes a violation of their intellectual property rights, or of their right to privacy.
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse16" aria-expanded="false" aria-controls="panelsStayOpen-collapse16">
                    Can user-generated content be removed?
                </button>
                </h2>
                <div id="panelsStayOpen-collapse16" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <strong>We may remove any content that does not comply with these Terms</strong><br/>We reserve the right, but have no obligation, to reject or remove any content that does not comply with these Terms.
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse17" aria-expanded="false" aria-controls="panelsStayOpen-collapse1">
                    IS user-generated content confidential?
                </button>
                </h2>
                <div id="panelsStayOpen-collapse17" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <strong>Site content is public</strong><br/>Any content you upload to our Site will be considered non-confidential and non-proprietary. You retain all of your ownership rights in your content, but by providing content to the Site, you are granting us and other users permission to use that content for the purposes that it is provided, including publishing the content on the Site and as otherwise permitted in accordance with these Terms.
                </div>
                </div>
            </div>
            </div>
            
        </div>
        <ChatBot/>
        </div>
    );
}

export default ClauseLibrary;