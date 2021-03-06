import { TextChannel } from "discord.js";
import Config from "./Config";
import Database from "./Database";

export async function cacheMessages(client) {
    if (Config.database.required) {
        const selfroles = await Database.selfrole_getAll()
        const guild = await client.guilds.fetch(Config.guild.id)

        selfroles.forEach(async selfrole => {
            const channel = await guild.channels.fetch(selfrole.channelId) as TextChannel
            const message = await channel.messages.fetch(selfrole.messageId)
        })
    }
}