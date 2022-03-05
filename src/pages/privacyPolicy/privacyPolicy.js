import React from 'react';
import NavMenu from '../../components/nav-menu/nav';
import styled from 'styled-components';
import heroImg from '../../assets/white-background-shape-v2.png';
import footerImg from '../../assets/footer.png'
import './policy-style.scss';

const HeroShapeBg = styled.div`
  background: url(${heroImg});
`;

export default function PrivacyPolicy() {
  return (
    <div className="mainPage">
      <HeroShapeBg className='HeroShapeBg'/>
      <section className='bifold-wrapper'>
        <NavMenu />
        <main className='buifold-content__pages'>
          <div className='pages-title'>
            <h1>Privacy Policy</h1>
          </div>
          <div className='pages-wrapper'>
            <div className='policy__block'>
              <strong>About this Policy</strong>
              <p>This privacy policy and general privacy notice applies to Chigwell Window Centre Ltd. We at Chigwell Window Centre Ltd take your privacy seriously.and this policy and notice has been drafted in accordance with the requirements of the General Data Protection Regulations (“GDPR”), with the support of the legal team at www.legalo.co.uk</p>
              <p>This privacy notice explains how we look after your personal data (in all situations where we collect your data) and sets out your privacy rights and also explains how the law and our approach to privacy and personal data protects you.</p>
              <p>This privacy notice supplements any other privacy notices that we may provide to you at the point that we collect data from you and should be read in conjunction with those notices.</p>
            </div>
            <div className='policy__block'>
              <strong>Our status and details</strong>
              <p>For the purpose of the GDPR we are the data controller and any enquiry regarding the collection or processing of your data should be addressed toour Data Protection Officer using the contact details below:</p>
              <p>Name or title: Sunny Attlas<br/>Email address: sunny@chigwellgroup.co.uk<br/>Postal address: Aaron House, Forest Road, Hainault Business Park, Ilford, Essex.<br/> IG6 3JP</p>
              <p>By using the Website, you consent to this policy. We are registered with the Information Commissioner’s Office for this purpose.</p>
            </div>
            <div className='policy__block'>
              <strong>Information we collect</strong>
              <p>We will collect, process and store personal data only if it is directly provided to us by you. You may do this in your capacity as the user of this Website, by enquiring in relation to our goods or services, becoming a customer or supplier, or potential supplier.</p>
              <p>Personal information covers any information which relates to you as an identifiable person. Below are examples of the type of data that this may include:</p>
              <p>(a) Identity Data including forenames, last name, maiden name, date of birth, gender, marital status, and username or similar identifier.<br/>(b) Contact Data may include invoicing; purchase order; home or work address, email address and telephone numbers, personal or job title and position.<br/>(c) Financial Data may include bank account and payment card details.<br/>(d) Special Category Data for example health or medical data, details about your race, religion, sex and political opinions.<br/>(e) Transaction Data may include payments made for products and services you have purchased from us, or in relation to payments that we have made to you.<br/>(f) Technical Data may include internet protocol (IP) address, browser typeand version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices used to access this Website.<br/>(g) Profile and Usage Data may include enquiries submitted by you, purchases information, feedback and survey responses, and how you use our website, products and services.<br/>(h) Marketing Data may include details of any preference that you have advised us of in relation to marketing communications from us.</p>
              <p>We may also collect non-personal data such as Aggregated Data which is data that may be obtained from your personal data, but which does not directly or indirectly identify you. This may include Usage Data detailing how you use our Website and the features and areas that you have interacted with.</p>
              <p>How do we collect your personal data?<br/>A range of different methods may be used to collect data which may include the following methods:<br/>(a) Direct interactions with us in person, by post, phone, email or otherwise. You may give us your Identity, Contact and Financial Information.<br/>(b) Automated technologies or interactions with our website, by using the web enquiry form, You may give us Identity, Contact and Financial Information.<br/>(c) Third parties or publicly available sources (third parties may be used inprocessing Identity, Contact and Financial categories of personal data).</p>
            </div>
            <div className='policy__block'>
              <strong>Data accuracy</strong>
              <p>It is important that the data that we hold about you is accurate and up to date. In the event that your data changes please notify us so that we can update our records.</p>
            </div>
            <div className='policy__block'>
              <strong>Use of your information</strong>
              <p>We may hold and process personal data that you provide to us in accordance with the GDPR.</p>
              <p>The information that we collect and store relating to you is primarily used:<br/>(a) To enable us to provide our services to you, to communicate with you and to meet our contractual commitments to you. This may include Identity, Contact, Financial and Transactional data.<br/>(b) To notify you about any changes to our business, such as improvements to our Website or service/product changes, that may affect our service or relationship with you. This may include Identity and Contactdata.<br/>(c) If you are an existing customer, we may contact you with information about goods and services similar to those that were the subject of a previous sale to you. This may include Identity and Contact data.(d) Where you have consented to receive such information, to provide information on other parties’ products or services that we feel may be of interest to you. This may include Identity, Contact and Marketing data.<br/>(e) Where you have consented to receive our e-newsletters to provide thatto you. This may include Identity and Contact data.<br/>(f) Where we need to comply with a legal obligation. This may include Identity, Contact and Transactional data.<br/>(g) Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests. This may include all types of data.</p>
              <p>Where we collect your data for marketing purposes we will always requestyour consent, at the point the data is collected, to use your data for that purpose.</p>
              <p>We will always obtain your prior consent to sharing your personal data with any third party for their marketing purposes. This may be to enable relevant third parties to advise you of products or services that may be of interest to you.</p>
              <p>We will only use your personal data for a reason other than the purpose for which it was originally obtained if we consider that we need to use it for that other purpose and have a legitimate interest in doing so.</p>
            </div>
            <div className='policy__block'>
              <strong>Disclosure of your information</strong>
              <p>There are a range of circumstances where we may disclose your data to third parties. These include:<br/>(a) Regulatory bodies. We may disclose your data to regulatory bodies to enable us to comply with the law and to assist fraud protection and minimise credit risk. This may include Identity, Contact and Transactional data.<br/>(b) Our Suppliers. We may disclose your data to third parties that are involved in the fulfilment of our services to you. This may include Identity, Contact and Transactional data.<br/>(c) Third party marketing. Where you have consented for us to do so, we may provide your data to selected third parties who may contact you 
about their goods or services that you may be interested in. This may include Identity, Contact and Marketing data.<br/>(d) Business sale. We may disclose your personal data outside of our organisation: <br/>(a) in the event that we sell or buy any business or assets, inwhich case we may disclose your personal data to the prospective seller or buyer of such business or assets; and <br/>(b) if Chigwell Window Centre Ltd’s business is bought by a third party, in which case personal data held by it about its customers will be one of the assets to transfer to the buyer.</p>
  <p>However, any such transfer will only be on terms that the confidentiality of your personal data is protected and that the terms of this privacy policywill continue to be complied with by the recipient.</p>
  <p>Please be advised that we do not reveal information about identifiable individuals to our advertisers, but we may, on occasion, provide them withAggregated Data about our Website visitors and customers.</p>
  <p>If you do not want us to share your data with third parties you will have the opportunity to withhold your consent to this when you provide your details to us on the form on which we collect your data, or you can do so by writing to us at the address detailed above or sending us an email to info@chigwellwindowcentre.co.uk at any time.</p>
            </div>
            <div className='policy__block'>
              <strong>Controlling the use of your data</strong>
              <p>Where we rely on consent as the lawful basis for processing your data youcan revoke or vary that consent at any time.If you do not want us to use your data or want to vary the consent that you have provided you can write to us at the address detailed in clause 2 or email us at info@chigwellwindowcentre.co.uk at any time.</p>
            </div>
            <div className='policy__block'>
              <strong>Data storage and the transfer your data</strong>
              <p>As part of the services offered to you, for example through our Website, the information you provide to us may be transferred to and stored in countries outside of the European Economic Area (EEA) as we use remote website server hosts to provide the website and some aspects of our service, which may be based outside of the EEA, or use servers based outside of the EEA – this is generally the nature of data stored in “the Cloud”. It may also be processed by staff operating outside the EEA who work for one of our suppliers, e.g. our website server host, payment processing provider, or work for us when temporarily outside of the EEA.</p>
              <p>A transfer of your personal data may happen if any of our servers are located in a country outside of the EEA or one of our service providers is located in a country outside of the EEA.</p>
              <p>If you use our service while you are outside the EEA, your personal data may be transferred outside the EEA in order to provide you with these services.</p>
              <p>If we transfer or store your personal data outside the EEA in this way, we will take steps with the aim of ensuring that your privacy rights continue to be protected, as outlined in this privacy policy. Where we use suppliers based in the US, we may transfer data to them if they are part of the Privacy Shield which requires them to provide similar protection to personal data shared between the Europe and the US.</p>
            </div>
            <div className='policy__block'>
              <strong>Security</strong>
              <p>The transmission of information via the Internet or email is not completelysecure. Although we will do our best to protect your personal data, we cannot guarantee the security of data while you are transmitting it to our site; any such transmission is at your own risk.</p>
              <p>We have put in place security measures to prevent your data from accidental, loss or disclosure. Once we have received your personal data, we will use strict procedures and security features to try to prevent unauthorised access.</p>
              <p>Where we have given you (or where you have chosen) a password so that you can access certain parts of our site, you are responsible for keeping this password confidential. You should choose a password it is not easy forsomeone to guess.</p>
              <p>In the event of a data breach we will notify the ICO and you in the event that the breach results in any likelihood of loss or damage to you.</p>
            </div>
            <div className='policy__block'>
              <strong>Data retention</strong>
              <p>The length of time that we retain, and store data depends on the purpose for which it was collected. We will only store data for as long as is requiredto fulfil that purpose, or for the purpose of satisfying legal requirements.</p>
              <p>It is a legal requirement that we keep certain data about our customers and suppliers for at least six years. The type of data includes Contact, Identity, Financial and Transaction Data.Where you have requested that we provide you with marketing materials we will retain your data until such time as consent is withdrawn by you.</p>
            </div>
            <div className='policy__block'>
              <strong>Use of cookies</strong>
              <p>Our Website uses cookies. We use cookies to gather information about your computer for our services and to provide statistical information regarding the use of our Website. Such information will not identify you personally – it is statistical data about our visitors and their use of our Website. This statistical data does not identify any personal details whatsoever.<br/>We may also gather information about your general Internet use by using a cookie file. Where used, these cookies are downloaded to your computerautomatically. This cookie file is stored on the hard drive of your computer, as cookies contain information that is transferred to your computer’s hard drive. They help us to improve our Website and the service that we provide to you.</p>
              <p>All computers have the ability to decline cookies. This can be done by activating the setting on your browser which enables you to decline the cookies. Please note that should you choose to decline cookies, you may be unable to access particular parts of our Website. Where we work with advertisers on our Website, our advertisers may also use cookies, over which we have no control. Such cookies would be downloaded once you click on advertisements on our Website.</p>
            </div>
            <div className='policy__block'>
              <strong>Your rights</strong>
              <p>The GDPR gives you a range of rights in relation to the personal data that we collect from. <br/> You have the right to:<br/>(a) Access your personal data. This right is commonly known as the ‘data subject access request’ and enables you to receive a copy of the personal data we hold about you. You will not need to pay a fee to access your personal data unless we can justifiably demonstrate that the request is repetitive or excessive. We will respond to all legitimate data access requests within one month, but we may need to obtain further informationfrom you in order to confirm your identity and the legitimacy of the request.<br/>(b) Request update of the personal data. This enables you to have any incomplete or inaccurate data corrected.<br/>(c) Erasure of your personal data. This enables you to ask us to delete personal data where there is no justifiable reason for us continuing to retain and process it. We may not always be able to delete the data such as if there is an ongoing contractual relationship between us or if we are legally required to retain the data.<br/>(d) Object to processing of your personal data where we are relying on consent or our legitimate interests (or those of a third party) as the justification for processing the data.<br/>(e) Restrict the processing of your personal data. This enables you to ask us to change the processing of your personal data. For example, you may wish to vary the basis on which we contact you.
              <br/>(f) Request the transfer of your personal data to you or to a third party. We will provide to you, or a third party you have chosen, your personal data in a structured, machine-readable format.<br/>(g) Withdraw consent. Where we are relying on consent to process your personal data you may withdraw that consent. If you withdraw your consent, we may not be able to provide certain products or services to you. We will advise you if this is the case at the time you withdraw your consent.<br/>You can exercise these rights at any time by writing to us at the address detailed above, or by email to info@chigwellwindowcentre.co.uk.</p>
            </div>
            <div className='policy__block'>
              <strong>Third party links</strong>
              <p>You might find links to third party websites on our website. If you click a link to a third-party website and visit that site, you may be allowing that site to collect and share certain data about you. These websites should have their own privacy policies, which you should check. We do not acceptany responsibility or liability for their policies whatsoever as we have no control over them.</p>
            </div>
            <div className='policy__block'>
              <strong>Complaints</strong>
              <p>If you wish to raise a complaint regarding our use of your personal data then you can contact the Information Commissioner’s Office (ICO), who are the UK supervisory authority for data protection issues. (www.ico.org.uk).<br/>If you do wish to raise a complain then we would welcome the opportunityto discuss your concerns before you contact the ICO to see if we can resolve the issue for you.</p>
            </div>
            <div className='policy__block'>
              <strong>Changes to this policy</strong>
              <p>We may update these policies to reflect changes to the website and customer feedback. Please regularly review these policies to be informed of how we are protecting your personal data.<br/>We welcome any queries, comments or requests you may have regarding this Privacy Policy. Please do not hesitate to contact us.<br/><br/>Version: October 2020</p>
            </div>
          </div>
        </main>
      </section>
      <footer className="footer">
        <p>Powered by</p>
        <a href="https://essexwebdesignstudio.com/bifold-builder/" target="_blank">
          <img class="footer__logo" src={footerImg} alt="logo"></img>
        </a>
      </footer>
    </div>
  )
}

