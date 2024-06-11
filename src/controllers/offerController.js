const Offer = require("../database/models/Offer");
const Profile = require("../database/models/Profile");
const normalizePath = require("../helpers/normalizePathName");

const showOffer = async (req, res) => {
    const { id } = req.params;

    try {
        const offer = await Offer.findById(id);

        if(!offer) {
            return res.status(400).json({state: 'failed', message: 'This offer doesnot not found'});
        }

        return res.status(200).json({state: 'success', message: 'Get offer successfully', offer: offer});
    } catch (error) {
        return res.status(400).json({state: 'failed', message: error.message});        
    }
}

const showOffers = async (req, res) => {
    try {
        const offers = await Offer.find({});

        return res.status(200).json({state: 'success', message: 'Get offers successfully', offers: offers});
    } catch (error) {
        return res.status(400).json({state: 'failed', message: error.message});        
    }
}

const createOffer = async (req, res) => {
    let { name, description, tokens, price, picture } = req.body;

    const inputsWorng = [];

    if(!name) {
        inputsWorng.push('name');
    }

    if(!tokens) {
        inputsWorng.push('tokens');
    }

    if(!price) {
        inputsWorng.push('price');
    }

    if(!picture) {
        inputsWorng.push('picture');
    }

    if(!description) {
        inputsWorng.push('description');
    }

    if(inputsWorng.length > 0) {
        return res.status(400).json({state: 'failed', message: 'You must insert all fields', fields: inputsWorng});        
    }

    if(typeof name !== 'string') {
        return res.status(400).json({state: 'failed', message: 'Name must be a string', field: 'name'});        
    }

    tokens = parseInt(tokens, 10);

    if(typeof tokens !== 'number') {
        return res.status(400).json({state: 'failed', message: 'Tokens must be a number', field: 'tokens'});        
    }

    if(typeof price !== 'string') {
        return res.status(400).json({state: 'failed', message: 'Price must be a string', field: 'price'});        
    }

    if(typeof picture !== 'string') {
        return res.status(400).json({state: 'failed', message: 'Picture must be a string', field: 'picture'});        
    }

    if(typeof description !== 'string') {
        return res.status(400).json({state: 'failed', message: 'Description must be a string', field: 'description'});        
    }

    try {
        await Offer.create({ name, description, price, tokens, picture});

        return res.status(200).json({state: 'success', message: 'Created offer successfully'});        
    } catch (error) {
        return res.status(400).json({state: 'failed', message: error.message});                
    }
}

const updateOffer = async (req, res) => {
    const { id } = req.params;

    const offer = await Offer.findById(id);

    if(!offer) {
        return res.status(400).json({state: 'failed', message: 'This offer does not exist'});                 
    }

    const { name, description, tokens, price, picture } = req.body;

    const inputsWorng = [];

    if(!name) {
        inputsWorng.push('name');
    }

    if(!tokens) {
        inputsWorng.push('tokens');
    }

    if(!price) {
        inputsWorng.push('price');
    }

    if(!description) {
        inputsWorng.push('description');
    }

    if(inputsWorng.length > 0) {
        return res.status(400).json({state: 'failed', message: 'You must insert all fields', fields: inputsWorng});        
    }

    if(typeof name !== 'string') {
        return res.status(400).json({state: 'failed', message: 'Name must be a string', field: 'name'});        
    }

    if(typeof tokens !== 'number') {
        return res.status(400).json({state: 'failed', message: 'Tokens must be a number', field: 'tokens'});        
    }

    if(typeof price !== 'string') {
        return res.status(400).json({state: 'failed', message: 'Price must be a string', field: 'price'});        
    }

    if(picture && typeof picture !== 'string') {
        return res.status(400).json({state: 'failed', message: 'Picture must be a string', field: 'picture'});        
    }

    if(typeof description !== 'string') {
        return res.status(400).json({state: 'failed', message: 'Description must be a string', field: 'description'});        
    }

    try {
        let offer;
        if(picture) {
            offer = await Offer.findByIdAndUpdate(id, { name, description, price, tokens, picture},{ new: true });
        } else {
            offer = await Offer.findByIdAndUpdate(id, { name, description, price, tokens }, { new: true });
        }

        return res.status(200).json({state: 'success', message: 'Updated offer successfully', offer});        
    } catch (error) {
        return res.status(400).json({state: 'failed', message: error.message});                
    }
}

const deleteOffer = async (req, res) => {
    const { id } = req.params;

    try {
        const offer = await Offer.findById(id);

        if(!offer) {
            return res.status(400).json({state: 'failed', message: 'This offer does not exist'});                 
        }

        await Offer.findByIdAndDelete(id);

        return res.status(200).json({state: 'success', message: 'Deleted offer successfully'});        
    } catch (error) {
        return res.status(400).json({state: 'failed', message: error.message});                
    }
}

const activateOffer = async (req, res) => {
    const { id } = req.params;

    try {
        const offer = await Offer.findById(id);

        if(!offer) {
            return res.status(400).json({state: 'failed', message: 'This offer does not exist'});                 
        }

        await Offer.findByIdAndUpdate(id, { active: true });

        return res.status(200).json({state: 'success', message: 'Activated offer successfully'});        
    } catch (error) {
        return res.status(400).json({state: 'failed', message: error.message});                
    }
}

const disactivateOffer = async (req, res) => {
    const { id } = req.params;

    try {
        const offer = await Offer.findById(id);

        if(!offer) {
            return res.status(400).json({state: 'failed', message: 'This offer does not exist'});                 
        }

        await Offer.findByIdAndUpdate(id, { active: false });

        return res.status(200).json({state: 'success', message: 'Disactivated offer successfully'});        
    } catch (error) {
        return res.status(400).json({state: 'failed', message: error.message});                
    }
}

const addTokensToUserAfterBuyOffer = async (req, res) => {
    const { id } = req.params;

    const user_id = req.user._id;

    const profile = await Profile.findOne({ user_id: user_id });

    if(!profile) {
        return res.status(400).json({state: 'failed', message: 'This profile does not found'});
    }

    const offer = await Offer.findById(id);

    if(!offer) {
        return res.status(400).json({state: 'failed', message: 'This offer does not found'});
    }

    try {
        profile.tokens+=offer.tokens;;
        await profile.save();

        return res.status(200).json({state: 'success', message: 'Buy offer was successfully'});
    } catch (error) {
        return res.status(400).json({state: 'failed', message: error.message});        
    }   
}

module.exports = {
    showOffer,
    showOffers,
    createOffer,
    updateOffer,
    deleteOffer,
    activateOffer,
    disactivateOffer,
    addTokensToUserAfterBuyOffer
}