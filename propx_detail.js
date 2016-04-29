// Property Cross - property details page
//
var lodash = require('lodash');

var star = Synchro.getResourceUrl("star.png");
var starEmpty = Synchro.getResourceUrl("star-empty.png");

exports.View =
{
    title: "Property Details",
    elements: 
    [
        { control: "stackpanel", width: "*", contents: [
            { control: "text", value: "{property.price_formatted}", font: { bold: true, size: 14 } },
            { control: "text", value: "{property.title}", width: "*", ellipsize: true, fontsize: 12 },
            { control: "stackpanel", orientation: "Horizontal", margin: 0, width: "*", contents: [
                { control: "image", resource: "{property.img_url}", horizontalAlignment: "Left", margin: { top: 10, bottom: 10 }, height: 300, width: 400 },
                /* !!! Broken - no guid
                { filter: { deviceMetric: "os", is: "Web" }, control: "imagetoggle", checkedresource: star, uncheckedresource: starEmpty, alt: "Favorite", margin: { top: 10 }, binding: { value: "fav", onToggle: "favToggled" } },
                */
            ]},
            { control: "text", value: "{property.bedroom_number} bedroom, {property.bathroom_number} bath", fontsize: 12 },
            { control: "text", value: "{property.summary}", width: "*", font: { italic: true, size: 10 } },

            { filter: { deviceMetric: "os", is: ["Windows", "WinPhone"] }, control: "commandBar.toggle", text: "Favorite", icon: "Favorite", binding: { value: "fav", onToggle: "favToggled" } },
            { filter: { deviceMetric: "os", is: "Android" }, control: "actionBar.toggle", checkedicon: "ic_action_important", uncheckedicon: "ic_action_not_important", showAsAction: "IfRoom", binding: { value: "fav", onToggle: "favToggled" } },
            { filter: { deviceMetric: "os", is: "iOS" }, control: "navBar.toggle", checkedicon: "star-mini", uncheckedicon: "star-empty-mini" , binding: { value: "fav", onToggle: "favToggled" } },
        ] },

    ]
}

exports.InitializeViewModel = function(context, session, params)
{
    var viewModel =
    {
        property: params.property,
        fav: lodash.find(session.favs, function (fav){ return fav == params.property.guid }) != null

    }
    console.log("ViewModel:", viewModel);
    return viewModel;
}

exports.Commands = 
{
    favToggled: function(context, session, viewModel, params)
    {
        if (viewModel.fav)
        {
            if (lodash.findIndex(session.favs, function (fav) { return fav == viewModel.property.guid }) === -1)
            {
                console.log("Pushing guid %s to session", viewModel.property.guid);
                session.favs.push(viewModel.property.guid);
            }
        }
        else
        {
            console.log("Pulling guid %s from session if it exists", viewModel.property.guid);
            lodash.remove(session.favs, function (fav) { return fav == viewModel.property.guid });
        }
    },
}