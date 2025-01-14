class ConfigManager {

    private config: Record<string, string> = {};

    getAllConfig(): Record<string, string> {
        return { ...this.config };
    }

    getConfig(key: string): string | null {
        return this.config[key];
    }

    setConfig(key: string, value: string): void {
        this.config[key] = value;
    }

}

export const configManager: ConfigManager = new ConfigManager();
