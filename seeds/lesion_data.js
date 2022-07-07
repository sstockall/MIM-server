exports.seed = async function(knex) {

  await knex('lesions').del()
  let lesions = [{
    name: 'Benign Nevus',
    description: 'Common mole; often brown, even in color, round, smooth, with defined borders',
    treatments: 'N/A',
    addtional_info: 'https://www.cancer.gov/sites/g/files/xnrzdm211/files/styles/cgov_article/public/cgov_contextual_image/2019-06/common-mole-1.jpg?itok=Xa3CPPVr',
    status: 'Benign'
  }, {
    name: 'Dysplastic Nevus',
    description: 'Atypical Mole; usually over 5mm, several colors, asymmetric, various textures',
    treatments: 'Monitor, can be excised if lesion begins to change',
    addtional_info: 'https://www.cancer.gov/sites/g/files/xnrzdm211/files/styles/cgov_article/public/cgov_contextual_image/400/800/files/dysplastic-nevi-1-article.jpg?h=ecf8d54a&itok=COmA99sk',
    status: 'Benign, with slightly higher risk or becoming malignant'
  }, {
    name: 'Melanoma',
    description: 'Melanocytic cancer that can arise from benign or dysplastic nevus, or from  apparently normal skin; very irregular in appearance (border, colors, texture, size)',
    treatments: 'Excision, lymph node biopsy to determine if lesion has spread to other areas of body. Further treatment depends on results of this biopsy.',
    addtional_info: 'https://www.cancer.gov/sites/g/files/xnrzdm211/files/styles/cgov_article/public/cgov_contextual_image/400/800/files/melanoma-1.jpg?itok=tZDg7kR4',
    status: 'Malignant'
  }, {
    name: 'Basal Cell Carcinoma',
    description: 'Most common form of skin cancer; usually pearly, flesh-colored bump',
    treatments: 'Excision, radiation',
    addtional_info: 'https://www.skincancerclinic.md/img/nbcc1.jpg',
    status: 'Malignant'
  }, {
    name: 'Squamous Cell Carcinoma',
    description: 'Second most common skin cancer; usually firm red nodule, can be scaly, sore and crusted',
    treatments: 'Excision, radiation',
    addtional_info: 'https://i0.wp.com/bhskin.com/wp-content/uploads/2020/04/SCC-.jpg?fit=640%2C604&ssl=1',
    status: 'Malignant'
  }, {
    name: 'Keratoacanthoma',
    description: 'Rapidly growing tumor; very similar in appearance to squamous cell carcinomas',
    treatments: 'Usually excised as it resembles a malignant growth, and does have the potential to develop into malignant lesion',
    addtional_info: 'https://www.wikidoc.org/images/e/e7/Keratoacanthoma42.jpg',
    status: 'Benign'
  }, {
    name: 'Campbell de Morgan Spot',
    description: 'Cherry Angioma; bright red soft-firm lesion',
    treatments: 'N/A',
    addtional_info: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/articles/2016/05/cherry-angioma-1487258639.jpg',
    status: 'Benign'
  }
]
  await knex('lesions').insert(lesions)
};
