
    
module.exports.getdate = () => {
    
    const today = new Date();
    const option = { weekday:"long", day:"numeric", month:"long", year:"numeric"};
    return today.toLocaleDateString("en-US", option);
    
}